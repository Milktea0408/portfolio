import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-32 px-12 md:px-24 flex flex-col gap-10">
        <h1 className="font-bold text-6xl">
          (Placeholder for name design + animation)
        </h1>

        {/* Projects + links to each project made */}
        <section>
          <h1 className="font-bold text-3xl">Projects</h1>
          {/* carousel slider of projects you've done + links to their github repos */}
        </section>

        {/* tech stack */}
        <section>
          <h1 className="font-bold text-3xl">Technical Skills</h1>
          <h2 className="text-xl">Programming Languages</h2>
          {/* js/ts, python, c, dash, */}
          <h2 className="text-xl">Frontend</h2>
          {/* react, html, css, bootstrap, tailwind, material ui */}
          <h2 className="text-xl">Backend + Database</h2>
          {/* postgresql, node.js */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
