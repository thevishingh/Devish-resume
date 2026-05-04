import { featuredProjects } from "@/data/resumeData";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {
  return (
    <section className="border-b border-zinc-200 py-8 dark:border-zinc-800">
      <SectionTitle
        title="Featured Project"
        subtitle="A production-ready project demonstrating real-world problem solving and frontend expertise."
      />

      <div className="mt-6 space-y-6">
        {featuredProjects?.map((project, projectIndex) => (
          <article
            key={`${project.title}-${projectIndex}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-md sm:p-6 lg:p-8 dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-black sm:text-lg dark:text-white">
                  {project.title}
                </h3>
                <p className="py-1 text-sm text-zinc-600 dark:text-teal-600">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-zinc-700 sm:text-base dark:text-zinc-300">
              {project.description}
            </p>

            {/* Points */}
            <ul className="mt-4 space-y-2">
              {project.points?.map((point, idx) => (
                <li
                  key={`${project.title}-point-${idx}`}
                  className="flex gap-3 text-sm leading-6 text-zinc-700 sm:text-base dark:text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-teal-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack?.map((item, idx) => (
                <span
                  key={`${project.title}-stack-${idx}`}
                  className="rounded-2xl bg-zinc-100 px-3 py-1 text-[10px] text-zinc-700 sm:text-sm dark:bg-teal-900 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links / Note */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {project.github || project.live ? (
                <>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </>
              ) : (
                project.note && (
                  <p className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-600 sm:text-sm dark:bg-zinc-800 dark:text-zinc-300">
                    {project.note}
                  </p>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// import { featuredProject } from "@/data/resumeData";
// import SectionTitle from "./SectionTitle";

// export default function Project() {
//   return (
//     <section className="glass-card">
//       <SectionTitle
//         title="Featured Project"
//         subtitle="Production-ready work that demonstrates real skills."
//       />

//       <article className="p-10 border border-border/30 rounded-3xl bg-gradient-to-br from-accent/10 to-muted/10">
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
//           <div>
//             <h3 className="text-3xl font-black text-foreground mb-2">{featuredProject.title}</h3>
//             <p className="text-xl text-muted-foreground">{featuredProject.subtitle}</p>
//           </div>
//         </div>

//         <p className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl">
//           {featuredProject.description}
//         </p>

//         <ul className="space-y-4 mb-8">
//           {featuredProject.points.map((point, idx) => (
//             <li key={idx} className="flex gap-4 text-lg text-foreground/90">
//               <div className="w-2 h-2 mt-3 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
//               <span>{point}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-wrap gap-3">
//           {featuredProject.stack.map((item) => (
//             <span key={item} className="glass-tag bg-primary/10 text-primary font-semibold shadow-lg">
//               {item}
//             </span>
//           ))}
//         </div>
//       </article>
//     </section>
//   );
// }
