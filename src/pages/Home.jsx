import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// programming languages icons
import javaIcon from "../assets/java.svg";
import javascriptIcon from "../assets/javascript.svg";
import typescriptIcon from "../assets/typescript.svg";
import nodeJSIcon from "../assets/nodejs.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";

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
          <h1 className="font-bold text-3xl mb-5">Projects</h1>
          {/* carousel slider of projects you've done + links to their github repos */}
        </section>

        {/* tech stack */}
        <section>
          <h1 className="font-bold text-3xl mb-5">Technical Skills</h1>

          {/* js/ts, python, c, dash, */}
          <h2 className="text-xl">Programming Languages</h2>
          <div className="flex gap-5 flex-wrap my-7">
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Javascript logo" src={javascriptIcon} />
              <p>Javascript</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="TypeScript logo" src={typescriptIcon} />
              <p>Typescript</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Python logo" src={pythonIcon} />
              <p>Python</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="C logo" src="temp.jpg" />
              <p>C</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Java logo" src={javaIcon} />
              <p>Java</p>
            </div>
          </div>

          {/* react, html, css, bootstrap, tailwind, material ui */}
          <h2 className="text-xl">Frontend</h2>
          <div className="flex gap-5 flex-wrap my-7">
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="React logo" src={reactIcon} />
              <p>React</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="HTML logo" src="temp.jpg" />
              <p>HTML</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="CSS logo" src="temp.jpg" />
              <p>CSS</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="BootStrap logo" src="temp.jpg" />
              <p>BootStrap</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Tailwind logo" src="temp.jpg" />
              <p>Tailwind</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Material UI logo" src="temp.jpg" />
              <p>Material UI</p>
            </div>
          </div>

          {/* postgresql, node.js */}
          <h2 className="text-xl">Backend + Database</h2>
          <div className="flex gap-5 flex-wrap my-7">
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="PostgreSQL logo" src="temp.jpg" />
              <p>PostgreSQL</p>
            </div>
            <div className="w-32 h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="NodeJS logo" src={nodeJSIcon} />
              <p>NodeJS</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
