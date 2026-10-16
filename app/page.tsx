import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Learning } from "@/components/Learning";
import { CurrentFocus } from "@/components/CurrentFocus";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-primary)] transition-colors">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Learning />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
