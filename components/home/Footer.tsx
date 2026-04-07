import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-teal-500 to-black shadow-lg shadow-black/25 ring-1 ring-white/10">
            <span className="text-sm font-black tracking-tight text-white">VS</span>
          </div>

          <div>
            <p className="text-sm font-semibold leading-none text-foreground">
              Vishal Singh
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              React Developer
            </p>
          </div>
        </div>

        <p className="text-center text-sm font-medium text-muted-foreground lg:text-right">
          Created with <span className="text-red-500">♥</span> by{" "}
          <Link
            href="https://thevishingh.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linear-to-r from-teal-400 via-teal-500 to-black bg-clip-text font-semibold text-transparent transition-opacity duration-300 hover:opacity-80"
          >
            thevishingh
          </Link>
        </p>
      </div>
    </footer>
  );
}