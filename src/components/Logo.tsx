type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-9 w-9",
  wordmark = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      {wordmark ? (
        <span className="font-display text-xl leading-none tracking-tight text-cocoa">
          FitBite
          <span className="text-berry">.</span>
        </span>
      ) : null}
    </span>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
      focusable="false"
    >
      <rect x="7" y="5" width="24" height="13" rx="6.5" fill="#3a2418" />
      <rect x="10" y="8" width="18" height="7" rx="3.5" fill="#e2b15a" />
      <rect x="4" y="16" width="28" height="18" rx="9" fill="#2f5d3d" />
      <rect x="7.5" y="19.5" width="21" height="11" rx="5.5" fill="#fffaf3" />
      <circle cx="30" cy="14" r="5.25" fill="#f4efe6" />
      <circle cx="30" cy="14" r="3.6" fill="#c24b32" />
    </svg>
  );
}
