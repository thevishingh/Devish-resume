'use client';

import { personalInfo } from "@/data/resumeData";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b  border-black/10 bg-teal-900/20 backdrop-blur-sm dark:border-white/10 dark:bg-teal/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-black text-base dark:text-teal-400 font-bold sm:text-lg">
            {personalInfo.name}
          </p>
          <p className="truncate text-black text-xs tracking-wide dark:text-teal-200/80 sm:text-sm">
            {personalInfo.role}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/20 hover:shadow-2xl sm:px-5"
            title="Download Resume PDF"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Download PDF</span>
          </Link>

          <Link
            href={`mailto:${personalInfo.email}`}
            className="hidden lg:flex items-center rounded-full border border-teal-400/30 bg-teal-500/20 px-5 py-2.5 text-sm font-semibold text-teal-100 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-teal-400/50 hover:bg-teal-500/30 hover:shadow-2xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}