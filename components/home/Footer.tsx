import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal-400 via-teal-500 to-black shadow-lg shadow-black/25 ring-1 ring-white/10">
            <span className="text-xs sm:text-sm font-black tracking-tight text-white">
              VS
            </span>
          </div>

          <div>
            <p className="text-xs sm:text-sm font-semibold leading-none text-foreground">
              Vishal Singh
            </p>
            <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
              React Developer
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-medium text-muted-foreground text-right">
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