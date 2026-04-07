import { personalInfo } from "@/data/resumeData";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

        {/* Left Content */}
        <div className="lg:col-span-7">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-teal-300">
            Last updated {personalInfo.updatedAt}
          </p>

          {/* NAME - Biggest & BOLDEST */}
          <h1 className="
            mt-4
            text-4xl sm:text-5xl md:text-4xl lg:text-4xl
            font-black tracking-tight
            text-black dark:text-white
            leading-none
            mb-4
          ">
            VISHAL SINGH
          </h1>

          {/* Tagline - Secondary but still prominent */}
          <h2 className="
            max-w-2xl
            text-xl sm:text-2xl md:text-3xl
            font-semibold tracking-tight
            text-black/90 dark:text-white/90
            leading-tight
            mb-6
          ">
            {personalInfo.tagline}
          </h2>

          <div className="mt-6 max-w-xl space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base md:text-lg">
            <p>{personalInfo.summaryTop}</p>
            <p>{personalInfo.summaryMiddle}</p>
            <p>{personalInfo.summaryBottom}</p>
          </div>
        </div>

        {/* Right Highlights - KEEP SAME */}
        <div className="lg:col-span-5 lg:pt-8">
          <div className="
            space-y-5
            border-t border-zinc-200 pt-6
            dark:border-zinc-800
            lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0
          ">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Highlights
            </p>

            <div className="space-y-3 text-sm sm:text-[15px] text-zinc-700 dark:text-zinc-300">
              {[
                "2+ years building React applications",
                "Mentored 6 interns in frontend development, improving team productivity",
                "Designed reusable UI architecture",
                "Implemented authentication and RBAC systems",
                "Integrated REST APIs efficiently",
                "Focused on performance and scalability",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-teal-400 shrink-0" />
                  <p className="leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}