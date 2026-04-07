import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothFollower from "@/components/ui/SmoothFollower";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://thevishingh-resume.vercel.app"),
  title: "Vishal Singh | Digital Resume",
  description:
    "Digital resume of Vishal Singh, a full stack web developer skilled in React, Next.js, Node.js, and modern web application development.",
  applicationName: "Vishal Singh Digital Resume",
  authors: [{ name: "Vishal Singh" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://thevishingh-resume.vercel.app",
    siteName: "Vishal Singh Digital Resume",
    title: "Vishal Singh | Digital Resume",
    description:
      "View the digital resume of Vishal Singh, a full stack web developer with experience in React, Next.js, Node.js, and modern frontend development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishal Singh digital resume preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Singh | Digital Resume",
    description:
      "View the digital resume of Vishal Singh, a full stack web developer with experience in React, Next.js, Node.js, and modern frontend development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full antialiased" ${inter.className}`}>
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