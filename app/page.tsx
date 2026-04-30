import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Intro Animation */}
      <Intro />
      {/* Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900/50 bg-slate-950/80 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} John Rey Maños. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </footer>
      </div>
    </main>
  );
}
