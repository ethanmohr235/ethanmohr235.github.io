export default function GraphMotif({ className }) {
  return (
    <svg
      className={`graph-motif ${className || ""}`}
      viewBox="0 0 220 160"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--line)" strokeWidth="1">
        <line x1="18" y1="140" x2="70" y2="90" />
        <line x1="70" y1="90" x2="128" y2="110" />
        <line x1="70" y1="90" x2="60" y2="30" />
        <line x1="60" y1="30" x2="118" y2="18" />
        <line x1="128" y1="110" x2="118" y2="18" />
        <line x1="128" y1="110" x2="190" y2="70" />
        <line x1="118" y1="18" x2="190" y2="70" />
      </g>
      <circle cx="18" cy="140" r="4" fill="var(--ink-faint)" opacity="0.5" />
      <circle cx="70" cy="90" r="5" fill="var(--accent)" opacity="0.55" />
      <circle cx="60" cy="30" r="3.5" fill="var(--ink-faint)" opacity="0.5" />
      <circle cx="118" cy="18" r="4" fill="var(--ink-faint)" opacity="0.5" />
      <circle cx="128" cy="110" r="5" fill="var(--accent)" opacity="0.55" />
      <circle cx="190" cy="70" r="3.5" fill="var(--ink-faint)" opacity="0.5" />
    </svg>
  );
}
