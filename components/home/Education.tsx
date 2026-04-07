import { education } from "@/data/resumeData";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 py-8">
      <SectionTitle title="Education" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Degree */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {education.degree.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {education.degree.university} • {education.degree.year}
          </p>
          <p className="text-sm font-medium text-black dark:text-teal-400">
            {education.degree.score}
          </p>
        </div>

        {/* HSC */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {education.hsc.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {education.hsc.board} • {education.hsc.year}
          </p>
          <p className="text-sm font-medium text-black dark:text-teal-400">
            {education.hsc.score}
          </p>
        </div>

        {/* SSC */}
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {education.ssc.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {education.ssc.board} • {education.ssc.year}
          </p>
          <p className="text-sm font-medium text-black dark:text-teal-400">
            {education.ssc.score}
          </p>
        </div>
      </div>
    </section>
  );
}

// import { education } from "@/data/resumeData";
// import SectionTitle from "./SectionTitle";

// export default function Education() {
//   return (
//     <section className="glass-card">
//       <SectionTitle title="Education" />

//       <div className="p-10 border border-border/30 rounded-3xl bg-linear-to-br from-muted/20 to-transparent">
//         <h3 className="text-3xl font-bold text-foreground mb-4">{education.degree}</h3>
//         <p className="text-2xl text-muted-foreground mb-6">{education.university}</p>
//         <p className="text-xl font-semibold text-primary">{education.year} • {education.score}</p>
//       </div>
//     </section>
//   );
// }
