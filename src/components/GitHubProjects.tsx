import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ExternalLink,
  FolderGit2,
  GitFork,
  Search,
  SearchX,
  Star,
  TriangleAlert,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { profileUrl } from "../data/site";
import { GithubIcon } from "./BrandIcons";
import { formatGitHubDate, formatNumber, useGitHub } from "../hooks/useGitHub";
import type { GitHubRepository } from "../types/github";
import { ActionButton, IconLink, LinkButton } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function GitHubProjects() {
  const github = useGitHub();

  return (
    <section id="github-projects" className="pt-10 pb-[100px] max-md:pb-[75px]">
      <div className="container-page">
        <div className="flex items-end justify-between gap-[30px] max-md:flex-col max-md:items-start">
          <SectionHeader
            className="mb-0"
            eyebrow="Open Source & Projects"
            title="My GitHub"
            description="Projects, experiments and open-source work pulled directly from my GitHub."
          />
          <LinkButton href={profileUrl} variant="secondary" external>
            <GithubIcon className="size-[18px]" />
            View GitHub Profile
            <ArrowUpRight className="size-[18px]" />
          </LinkButton>
        </div>

        {github.status === "ready" && github.profile ? (
          <div className="mt-[38px] grid grid-cols-4 gap-3.5 max-md:grid-cols-2">
            <StatCard icon={<BookOpen className="size-[17px]" />} value={github.repositories.length} label="Public Projects" />
            <StatCard icon={<Star className="size-[17px]" />} value={github.totalStars} label="Total Stars" />
            <StatCard icon={<Users className="size-[17px]" />} value={github.profile.followers} label="Followers" />
            <StatCard icon={<GitFork className="size-[17px]" />} value={github.profile.public_repos} label="Repositories" />
          </div>
        ) : null}

        <div className="my-[30px] mb-6 flex items-center justify-between gap-5 max-md:flex-col max-md:items-stretch">
          <div className="flex flex-wrap gap-[7px]">
            {github.languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => github.changeLanguage(language)}
                className={`rounded-lg border px-[11px] py-[7px] text-[10px] transition duration-200 ${
                  github.activeLanguage === language
                    ? "border-brand bg-brand text-[#042f2e]"
                    : "border-white/[0.08] bg-transparent text-muted hover:border-brand hover:bg-brand hover:text-[#042f2e]"
                }`}
              >
                {language}
              </button>
            ))}
          </div>

          <div className="relative w-[290px] max-md:w-full">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-[15px] -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              value={github.searchQuery}
              onChange={(event) => github.changeSearch(event.target.value)}
              placeholder="Search repositories..."
              autoComplete="off"
              className="h-[43px] w-full rounded-[10px] border border-white/[0.08] bg-surface pr-[15px] pl-10 text-white outline-none placeholder:text-[#64748b] focus:border-primary"
            />
          </div>
        </div>

        {github.status === "loading" ? (
          <div className="px-5 py-20 text-center">
            <div className="mx-auto size-[34px] animate-spin rounded-full border-[3px] border-white/[0.08] border-t-primary" />
            <p className="mt-3.5 text-xs text-muted">Loading GitHub projects...</p>
          </div>
        ) : null}

        {github.status === "error" ? (
          <div className="px-5 py-20 text-center">
            <TriangleAlert className="mx-auto size-8 text-[#64748b]" />
            <h3 className="mt-[15px] font-semibold">Couldn't load GitHub projects</h3>
            <p className="mt-3.5 text-xs text-muted">You can still view my repositories directly on GitHub.</p>
            <LinkButton href={profileUrl} variant="secondary" external className="mt-5">
              <GithubIcon className="size-[18px]" />
              Open GitHub
            </LinkButton>
          </div>
        ) : null}

        {github.status === "ready" ? (
          github.visibleRepositories.length === 0 ? (
            <div className="py-20 text-center">
              <SearchX className="mx-auto size-10 text-slate-600" />
              <h3 className="mt-5 font-semibold">No projects found</h3>
              <p className="mt-2 text-sm text-slate-500">Try another search or language.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
              {github.visibleRepositories.map((repository) => (
                <RepositoryCard key={repository.id} repository={repository} />
              ))}
            </div>
          )
        ) : null}

        {github.status === "ready" && github.canLoadMore ? (
          <div className="mt-[35px] text-center">
            <ActionButton onClick={github.loadMore}>
              Load More Projects
              <ChevronDown className="size-[18px]" />
            </ActionButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-[14px] border border-white/[0.08] bg-surface p-5">
      <div className="mb-3.5 flex size-[38px] items-center justify-center rounded-[10px] bg-brand/10 text-[#67e8f9]">
        {icon}
      </div>
      <strong className="block text-[23px]">{formatNumber(value)}</strong>
      <span className="text-[11px] text-muted">{label}</span>
    </div>
  );
}

function RepositoryCard({ repository }: { repository: GitHubRepository }) {
  const description = repository.description || "No description provided for this project yet.";
  const language = repository.language || "Other";
  const topics = (repository.topics ?? []).slice(0, 4);

  return (
    <article className="flex min-h-[290px] flex-col rounded-2xl border border-white/[0.08] bg-surface bg-gradient-to-br from-white/[0.02] to-transparent p-[22px] transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex size-[42px] items-center justify-center rounded-[11px] bg-brand/10 text-[#67e8f9]">
          <FolderGit2 className="size-[19px]" />
        </div>
        <div className="flex gap-[7px]">
          {repository.homepage ? (
            <IconLink href={repository.homepage} label="Live project" size="sm">
              <ExternalLink />
            </IconLink>
          ) : null}
          <IconLink href={repository.html_url} label="View repository" size="sm">
            <GithubIcon />
          </IconLink>
        </div>
      </div>

      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="mt-5 text-[17px] font-bold hover:text-[#67e8f9]">{repository.name}</h3>
      </a>
      <p className="mt-2.5 text-xs leading-[1.7] text-muted">{description}</p>

      {topics.length > 0 ? (
        <div className="mt-[15px] flex flex-wrap gap-1.5">
          {topics.map((topic) => (
            <span key={topic} className="rounded-full bg-brand/10 px-2 py-[5px] text-[9px] text-[#67e8f9]">
              {topic}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-2.5 border-t border-white/5 pt-[18px]">
        <div className="flex flex-wrap gap-3 text-[10px] text-[#718096]">
          <span className="inline-flex items-center gap-[5px]">
            <span className="size-1.5 rounded-full bg-[#67e8f9]" />
            {language}
          </span>
          <span className="inline-flex items-center gap-[5px]">
            <Star className="size-[11px]" />
            {repository.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-[5px]">
            <GitFork className="size-[11px]" />
            {repository.forks_count}
          </span>
        </div>
        <span className="text-[9px] text-[#4f5b6d]">{formatGitHubDate(repository.updated_at)}</span>
      </div>
    </article>
  );
}
