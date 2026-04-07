import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothFollower from "@/components/ui/SmoothFollower";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full antialiased", "font-sans", ${inter.className}`}>
      <body className={`min-h-screen bg-background text-foreground ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothFollower />  
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme/ThemeProvider.tsx";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Vishal Singh - Resume",
//   description: "React Frontend Developer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning> {/* Add this */}
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange  // Smooth theme change
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }