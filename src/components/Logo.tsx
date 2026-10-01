import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3 text-[15px] font-semibold tracking-[0.04em]">
      <span className="flex size-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#0891b2] to-brand text-[13px] shadow-[0_0_30px_rgba(34,211,238,0.22)]">
        &lt;/&gt;
      </span>
      <span>Dekpen Tari</span>
    </Link>
  );
}
