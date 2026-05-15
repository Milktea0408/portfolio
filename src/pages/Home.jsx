import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/home/ProjectsSection";
import TechStack from "../components/home/TechStack";
import temp_avatar from "../assets/favicon.svg";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-home-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.28 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-cream relative overflow-x-hidden">
      <Navbar />

      <main className="home-scroll">
        {/* HEADING */}
        <header
          data-home-section
          className="home-section min-h-svh snap-start flex items-center px-5 md:px-8 py-24 md:py-28 relative"
        >
          <div className="w-full max-w-[1100px] mx-auto flex flex-col-reverse items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-8 sm:gap-10">
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-cream/35 mb-4">
                Portfolio
              </p>
              <h1 className="font-display font-normal text-[clamp(3.8rem,18vw,8.5rem)] sm:text-[clamp(4rem,11vw,8.5rem)] leading-[0.9] tracking-tight text-cream">
                Lucy
                <br />
                <em className="italic text-cream/50">Chen</em>
              </h1>
              <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-cream/35 mt-5">
                Software Engineer &amp; Web Developer
              </p>
            </div>
            <div className="hero-avatar w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 flex-shrink-0 grayscale-[20%]">
              <img
                src={temp_avatar}
                alt="Lucy Chen"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-cream/35 hover:text-cream/70 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown size={28} strokeWidth={1.4} />
          </a>
        </header>

        {/* PROJECTS */}
        <section
          id="projects"
          data-home-section
          className="home-section min-h-[88svh] md:min-h-[86svh] snap-start flex items-center px-5 md:px-8 py-20 md:py-24"
        >
          <div className="w-full max-w-[1100px] mx-auto">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-[0.58rem] tracking-[0.12em] text-cream/20">
                01
              </span>
              <h2 className="font-display font-normal text-[1.8rem] md:text-[2.15rem] tracking-tight text-cream">
                Personal Projects
              </h2>
            </div>
            <ProjectsSection />
          </div>
        </section>

        {/* TECH STACK */}
        <section
          data-home-section
          className="home-section min-h-[88svh] md:min-h-[86svh] snap-start flex items-center px-5 md:px-8 py-20 md:py-24"
        >
          <div className="w-full max-w-[1100px] mx-auto">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-[0.58rem] tracking-[0.12em] text-cream/20">
                02
              </span>
              <h2 className="font-display font-normal text-[1.8rem] md:text-[2.15rem] tracking-tight text-cream">
                Technical Skills
              </h2>
            </div>
            <TechStack />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
