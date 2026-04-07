import { skillCategories } from "@/data/resumeData";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 py-8">
      <SectionTitle
        title="Skills"
        subtitle="React-focused technologies and workflows I use to build scalable applications."
      />

      <div className="mt-6 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={`
              grid grid-cols-1 sm:grid-cols-[180px_1fr]
              gap-3 sm:gap-6
              px-4 sm:px-6 py-4
              items-start
              ${
                index !== skillCategories.length - 1
                  ? "border-b border-zinc-200 dark:border-zinc-800"
                  : ""
              }
            `}
          >
            {/* Left Column (Category) */}
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {category.title}
            </div>

            {/* Right Column (Skills) */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="
                    text-xs sm:text-sm
                    px-3 py-1.5
                    rounded-md
                    bg-zinc-100 text-zinc-800
                    dark:bg-zinc-800 dark:text-zinc-300
                    border border-zinc-200 dark:border-zinc-700
                    hover:bg-zinc-200 dark:hover:bg-zinc-700
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
