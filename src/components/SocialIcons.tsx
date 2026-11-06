type IconProps = {
  className?: string;
};

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M6.34 9.35H3.56V20.5h2.78V9.35Zm-.09-3.95a1.65 1.65 0 1 0-.03 3.3 1.65 1.65 0 0 0 .03-3.3ZM12.1 9.35H9.35v11.15h2.77v-5.86c0-1.55.29-3.05 2.21-3.05 1.9 0 1.92 1.77 1.92 3.15v5.76H19V14.3c0-3.03-.65-5.36-4.19-5.36-1.7 0-2.84.93-3.31 1.81h-.05V9.35Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M14.3 20.5v-7.05h2.36l.35-2.75H14.3V9.05c0-.8.22-1.34 1.36-1.34h1.45V5.25c-.25-.03-1.11-.11-2.12-.11-2.1 0-3.54 1.28-3.54 3.63v2.03H8.9v2.75h2.55V20.5h2.85Z" />
    </svg>
  );
}
