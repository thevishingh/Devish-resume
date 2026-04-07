import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Project";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <>
      <main className="grid-overlay min-h-dvh transition-colors duration-300">
      <Header />
      
      <div className="mx-auto max-w-4xl relative px-5 py-12 sm:px-8 z-10">
        <Hero />
        <div className="space-y-8">
          <Skills />
          <Experience />
          <Project />
          <Education />
          <Contact />
        </div>
      </div>
        <Footer/>
    </main>
    </>
  );
}
