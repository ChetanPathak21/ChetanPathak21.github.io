import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text-primary)] px-6 text-center">
      <div className="space-y-4 max-w-md">
        <p className="text-xs uppercase tracking-widest font-mono text-[var(--text-secondary)]">
          404 — Not Found
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          The requested page does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
