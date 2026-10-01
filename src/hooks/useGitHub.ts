import { useEffect, useMemo, useState } from "react";
import { githubConfig } from "../data/site";
import type { GitHubProfile, GitHubRepository } from "../types/github";

type Status = "loading" | "ready" | "error";

function processRepositories(repositories: GitHubRepository[]) {
  const excluded = new Set(
    githubConfig.excludedRepositories.map((name) => name.toLowerCase()),
  );

  return repositories
    .filter((repository) => {
      if (!githubConfig.showForks && repository.fork) {
        return false;
      }

      if (!githubConfig.showArchived && repository.archived) {
        return false;
      }

      if (excluded.has(repository.name.toLowerCase())) {
        return false;
      }

      return true;
    })
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}

export function useGitHub() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [activeLanguage, setActiveLanguage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState<number>(githubConfig.displayPerPage);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const username = githubConfig.username;
        const [profileResponse, repositoryResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=${githubConfig.repositoriesPerPage}&sort=updated&direction=desc`,
            {
              signal: controller.signal,
              headers: { Accept: "application/vnd.github+json" },
            },
          ),
        ]);

        if (!profileResponse.ok || !repositoryResponse.ok) {
          throw new Error("Unable to fetch GitHub data.");
        }

        const profileData = (await profileResponse.json()) as GitHubProfile;
        const repositoryData = (await repositoryResponse.json()) as GitHubRepository[];

        if (!Array.isArray(repositoryData)) {
          throw new Error("Unexpected GitHub repository response.");
        }

        setProfile(profileData);
        setRepositories(processRepositories(repositoryData));
        setStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setStatus("error");
      }
    }

    void load();

    return () => controller.abort();
  }, []);

  const languages = useMemo(() => {
    const names = repositories
      .map((repository) => repository.language)
      .filter((language): language is string => Boolean(language));

    return ["All", ...new Set(names)];
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return repositories.filter((repository) => {
      const languageMatches =
        activeLanguage === "All" || repository.language === activeLanguage;

      const searchableText = [
        repository.name,
        repository.description ?? "",
        (repository.topics ?? []).join(" "),
        repository.language ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return languageMatches && searchableText.includes(query);
    });
  }, [repositories, activeLanguage, searchQuery]);

  const visibleRepositories = filteredRepositories.slice(0, visibleCount);
  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );

  function changeLanguage(language: string) {
    setActiveLanguage(language);
    setVisibleCount(githubConfig.displayPerPage);
  }

  function changeSearch(value: string) {
    setSearchQuery(value);
    setVisibleCount(githubConfig.displayPerPage);
  }

  function loadMore() {
    setVisibleCount((count) => count + githubConfig.displayPerPage);
  }

  return {
    status,
    profile,
    repositories,
    languages,
    activeLanguage,
    searchQuery,
    visibleRepositories,
    filteredCount: filteredRepositories.length,
    totalStars,
    canLoadMore: visibleCount < filteredRepositories.length,
    changeLanguage,
    changeSearch,
    loadMore,
  };
}

export function formatGitHubDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatNumber(number: number) {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }

  return String(number);
}
