import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/home/ProjectsSection";
import TechStack from "../components/home/TechStack";
import temp_avatar from "../assets/favicon.svg";

function Home() {
  return (
    <div className="min-h-screen bg-ink text-cream relative overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-5 md:px-8 pb-16">
        {/* HEADING */}
        <header className="pt-36 md:pt-44 pb-14 border-b border-white/[0.07] flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-cream/35 mb-4">
              Portfolio
            </p>
            <h1 className="font-display font-normal text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-tight text-cream">
              Lucy
              <br />
              <em className="italic text-cream/50">Chen</em>
            </h1>
            <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-cream/35 mt-4">
              Software Engineer &amp; Web Developer
            </p>
          </div>
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/10 flex-shrink-0 grayscale-[20%]">
            <img
              src={temp_avatar}
              alt="Lucy Chen"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </header>

        {/* PROJECTS */}
        <section className="pt-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.58rem] tracking-[0.12em] text-cream/20">
              01
            </span>
            <h2 className="font-display font-normal text-[1.6rem] tracking-tight text-cream">
              Personal Projects
            </h2>
          </div>
          <ProjectsSection />
        </section>

        {/* TECH STACK */}
        <section className="pt-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[0.58rem] tracking-[0.12em] text-cream/20">
              02
            </span>
            <h2 className="font-display font-normal text-[1.6rem] tracking-tight text-cream">
              Technical Skills
            </h2>
          </div>
          <TechStack />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
