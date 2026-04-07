// type SectionTitleProps = {
//   title: string;
//   subtitle?: string;
// };

// export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="mt-3 text-lg text-muted-foreground max-w-md leading-6">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
   <h2 className="text-2xl md:text-6xl font-bold 
  bg-gradient-to-r 
  from-black via-teal-500 to-black 
  dark:from-white dark:via-gray-500 dark:to-white 
  bg-clip-text text-transparent">
  {title}
</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-6xl leading-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
