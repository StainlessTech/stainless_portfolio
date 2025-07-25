import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className=" min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>



      <footer className=" bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className=" max-w-7xl mx-auto">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
            <div className=" text-center md:text-left">
              <p className=" text-muted-foreground">
                © 2025 Oluwasegun Samson. All rights reserved.
              </p>
            </div>
            <div className=" text-center md:text-right">
              <p className=" text-muted-foreground text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}