// import { personalInfo } from "@/data/resumeData";
// import Link from "next/link";

// export default function Contact() {
//   return (
//     <section className="py-8">
//       <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <h2 className="text-lg font-semibold tracking-tight dark:text-teal-900">
//             Contact
//           </h2>
//           <p className="mt-1 text-sm text-zinc-500">
//             Best used as a quick resume page for interview sharing.
//           </p>
//         </div>
//       </div>
//       <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-black dark:text-zinc-300">
//         {/* Email */}
//         <p className="flex flex-col sm:flex-row sm:items-center gap-1">
//           <span className="font-medium text-black dark:text-teal-400">
//             Email:
//           </span>
//           <Link
//             href={`mailto:${personalInfo.email}`}
//             className="underline underline-offset-4 hover:opacity-80"
//           >
//             {personalInfo.email}
//           </Link>
//         </p>

//         {/* Phone */}
//         <p className="flex flex-col sm:flex-row sm:items-center gap-1">
//           <span className="font-medium text-black dark:text-teal-400">
//             Phone:
//           </span>
//           <Link
//             href={`tel:${personalInfo.phone}`}
//             className="underline underline-offset-4 hover:opacity-80"
//           >
//             {personalInfo.phone}
//           </Link>
//         </p>

//         {/* LinkedIn */}
//         <p className="flex flex-col sm:flex-row sm:items-center gap-1">
//           <span className="font-medium text-black dark:text-teal-400">
//             LinkedIn:
//           </span>
//           <Link
//             href={personalInfo.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline underline-offset-4 hover:opacity-80"
//           >
//             linkedin.com/in/thevishingh
//           </Link>
//         </p>

//         {/* GitHub */}
//         <p className="flex flex-col sm:flex-row sm:items-center gap-1">
//           <span className="font-medium text-black dark:text-teal-400">

//           </span>
//           <Link
//             href={personalInfo.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline underline-offset-4 hover:opacity-80"
//           >
//             github.com/thevishingh
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }


import { personalInfo } from "@/data/resumeData";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="py-8">
      <SectionTitle
        title="Get in Touch"
        subtitle="Have a project or opportunity? I’d love to hear from you."
      />

      <div className="my-6 grid grid-cols-1 gap-4 text-sm text-black dark:text-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
        <p className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            <FaEnvelope className="text-red-500" />
            <span>{personalInfo.email}</span>
          </Link>
        </p>

        <p className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Link
            href={`tel:${personalInfo.phone}`}
            className="inline-flex items-center gap-2 underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            <FaPhoneAlt className="text-black dark:text-white" />
            <span>{personalInfo.phone}</span>
          </Link>
        </p>

        <p className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            <FaLinkedin className="text-[#0A66C2]" />
            <span>linkedin.com/in/thevishingh</span>
          </Link>
        </p>

        <p className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            <FaGithub className="text-black dark:text-white" />
            <span>github.com/thevishingh</span>
          </Link>
        </p>
      </div>
    </section>
  );
}