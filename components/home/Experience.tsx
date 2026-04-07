// import { experiences } from "@/data/resumeData";
// import SectionTitle from "./SectionTitle";

// export default function Experience() {
//   return (
//     <section className="border-b border-zinc-200 py-8">
//       <SectionTitle
//         title="Experience"
//         subtitle="Focused on work that directly reflects frontend delivery and collaboration."
//       />

//       <div className="space-y-8">
//         {experiences.map((experience) => (
//           <article key={`${experience.role}-${experience.duration}`}>
//             <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
//               <div>
//                 <h3 className="text-base font-semibold text-zinc-950">{experience.role}</h3>
//                 <p className="text-sm text-zinc-600">{experience.company}</p>
//               </div>
//               <p className="text-sm text-zinc-500">{experience.duration}</p>
//             </div>

//             <ul className="mt-4 space-y-2">
//               {experience.points.map((point) => (
//                 <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-700">
//                   <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { experiences } from "@/data/resumeData";
// import SectionTitle from "./SectionTitle";

// export default function Experience() {
//   return (
//     <section className="glass-card">
//       <SectionTitle
//         title="Experience"
//         subtitle="Real impact delivered in production environments."
//       />

//       <div className="space-y-10 mt-8">
//         {experiences.map((experience, index) => (
//           <article key={index} className="group">
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 group-hover:bg-accent/5 group-hover:rounded-2xl group-hover:p-6 transition-all duration-300">
//               <div>
//                 <h3 className="text-2xl font-bold text-foreground">{experience.role}</h3>
//                 <p className="text-lg text-muted-foreground mt-1">{experience.company}</p>
//               </div>
//               <p className="text-lg font-semibold text-primary">{experience.duration}</p>
//             </div>

//             <ul className="space-y-4">
//               {experience.points.map((point, idx) => (
//                 <li key={idx} className="flex gap-4 text-lg text-foreground/90">
//                   <div className="w-2 h-2 mt-3 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import { experiences } from "@/data/resumeData";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 py-8">

      <SectionTitle
        title="Experience"
        subtitle="Building modern, responsive, and user-focused applications with real-world impact."
      />
<hr className="py-2" />
      <div className="space-y-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.duration}`}
            className=" p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300"
          >

            {/* Header */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                  {experience.role}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {experience.company}
                </p>
              </div>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {experience.duration}
              </p>
            </div>

            {/* Points */}
            <ul className="mt-4 space-y-2">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-teal-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>
    </section>
  );
}