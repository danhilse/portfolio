import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs text-muted uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-sm text-muted mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-xs bg-foreground text-background px-4 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
