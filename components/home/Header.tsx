'use client';

import { personalInfo } from "@/data/resumeData";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-teal-900/20 backdrop-blur-sm dark:border-white/10 dark:bg-teal/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-10 xl:px-16">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-zinc-900 sm:text-lg dark:text-white">
            {personalInfo.name}
          </p>
          <p className="truncate text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
            {personalInfo.role}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="/resume/Vishal_Singh_React_Developer_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm font-medium text-zinc-900 transition-all hover:border-black/20 hover:bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </Link>

          <Link
            href={`mailto:${personalInfo.email}`}
            className="hidden items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700 dark:flex dark:bg-white dark:text-black dark:hover:bg-zinc-200 lg:flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}