import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import temp_avatar from "../assets/favicon.svg";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-cream overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="w-full max-w-[1100px] mx-auto px-5 md:px-8 pb-16 flex-1">
        {/* PAGE HERO */}
        <header className="pt-36 md:pt-44 pb-14 border-b border-white/[0.07] grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_clamp(8.5rem,18vw,12rem)] md:items-end gap-8">
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-cream/35 mb-4">
              About me
            </p>
            <h1 className="font-display font-normal text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-cream">
              A little
              <br />
              <em className="italic text-cream/50">about me.</em>
            </h1>
          </div>
          <div className="hidden md:block w-full aspect-square rounded-lg overflow-hidden border border-white/[0.08] grayscale-[25%]">
            <img
              src={temp_avatar}
              alt="Lucy Chen"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </header>

        {/* BIO */}
        <section className="pt-14 pb-14 border-b border-white/[0.07] grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16">
          <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-cream/28 pt-1">
            Background
          </span>
          <div className="font-display text-[1.2rem] leading-relaxed text-cream/85 space-y-4">
            <p>
              Hi, I'm Lucy, a Sydney-based web developer with a background in
              Computer Science.
            </p>
            <p>
              I enjoy building clean, responsive interfaces and creating
              meaningful user experiences. I'm always looking to learn and grow
              whether through uni, internships, or side projects.
            </p>
          </div>
        </section>

        {/* HOBBIES */}
        {/* <section className="pt-14">
          <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-cream/28 mb-8">
            Interests &amp; Hobbies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] border border-white/[0.07] mb-14">
            {[
              {
                num: "01",
                title: "Favourite Drinks",
                body: "Add a short description of your favourite drinks or café culture here.",
              },
              {
                num: "02",
                title: "Music",
                body: "Describe your taste in music — genres, artists, what you listen to while coding.",
              },
              {
                num: "03",
                title: "Movies",
                body: "What kind of films do you love? A favourite director, genre, or recent watch.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="p-7 bg-ink hover:bg-white/[0.02] transition-colors duration-200"
              >
                <p className="font-mono text-[0.58rem] tracking-[0.1em] text-cream/20 mb-4">
                  {num}
                </p>
                <h3 className="font-display text-[1.3rem] font-normal text-cream mb-3">
                  {title}
                </h3>
                <p className="font-mono text-[0.68rem] leading-[1.75] text-cream/42">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA */}
        {/* <div className="flex items-center gap-5">
          <button
            onClick={() => navigate("/")}
            className="font-mono text-[0.65rem] tracking-[0.12em] uppercase bg-cream text-ink px-7 py-3 hover:opacity-70 transition-opacity duration-200"
          >
            See my work →
          </button>
          <span className="font-mono text-[0.62rem] tracking-[0.06em] text-cream/28">
            View projects &amp; skills
          </span>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}

export default About;
