import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
// programming languages icons
import bashIcon from "../assets/bash.svg";
import boostrapIcon from "../assets/bootstrap.svg";
import cIcon from "../assets/c_programming.svg";
import cssIcon from "../assets/css.svg";
import html5Icon from "../assets/html5.svg";
import javaIcon from "../assets/java.svg";
import javascriptIcon from "../assets/javascript.svg";
import materialUIIcon from "../assets/materialui.svg";
import nodeJSIcon from "../assets/nodejs.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import typescriptIcon from "../assets/typescript.svg";
// profile pic
import temp_avatar from "../assets/temp_avatar.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-32 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col gap-6 md:gap-10">
        <section
          className="flex flex-col-reverse justify-center items-center md:flex-row
                          bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg"
        >
          <img
            src={temp_avatar}
            alt="profile image"
            className="w-48 h-auto object-contain"
          />
          <div className="flex flex-col justify-center">
            <h1
              className="font-bold text-3xl text-center sm:text-4xl md:text-5xl md:text-left lg:text-6xl
                bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Lucy Chen
            </h1>
            <p className="mt-2 text-gray-400 text-sm text-center md:text-base md:text-left">
              Front-end Engineer | Web developer | Software Engineer
            </p>
          </div>
        </section>

        {/* Projects + links to each project made */}
        <section className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h1
            className="font-bold text-2xl md:text-3xl mb-3 md:mb-5
              bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Projects
          </h1>
          {/* carousel slider of projects + links to github repos */}
          <ProjectsSection />
        </section>

        {/* tech stack */}
        <section className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h1
            className="font-bold text-2xl md:text-3xl mb-3 md:mb-
          bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Technical Skills
          </h1>

          {/* js/ts, python, c, dash, java */}
          <h2 className="text-lg md:text-xl text-lg md:text-xl text-gray-200 border-b border-gray-700 pb-2 mb-2">
            Programming Languages
          </h2>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap my-4 md:my-7 justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="Javascript logo"
                src={javascriptIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">Javascript</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="TypeScript logo"
                src={typescriptIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">Typescript</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="Python logo"
                src={pythonIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">Python</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="C logo" src={cIcon} className="w-1/2 md:w-3/5" />
              <p className="text-xs sm:text-sm md:text-base">C</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Java logo" src={javaIcon} className="w-1/2 md:w-3/5" />
              <p className="text-xs sm:text-sm md:text-base">Java</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="Bash logo" src={bashIcon} className="w-1/2 md:w-3/5" />
              <p className="text-xs sm:text-sm md:text-base">Bash</p>
            </div>
          </div>

          {/* react, html, css, bootstrap, tailwind, material ui */}
          <h2 className="text-lg md:text-xl text-lg md:text-xl text-gray-200 border-b border-gray-700 pb-2 mb-2">
            Frontend
          </h2>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap my-4 md:my-7 justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="React logo"
                src={reactIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">React</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="HTML logo" src={html5Icon} className="w-1/2 md:w-3/5" />
              <p className="text-xs sm:text-sm md:text-base">HTML</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img alt="CSS logo" src={cssIcon} className="w-1/2 md:w-3/5" />
              <p className="text-xs sm:text-sm md:text-base">CSS</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="BootStrap logo"
                src={boostrapIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">BootStrap</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="Tailwind logo"
                src={tailwindIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">Tailwind</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="Material UI logo"
                src={materialUIIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">Material UI</p>
            </div>
          </div>

          {/* postgresql, node.js */}
          <h2 className="text-lg md:text-xl text-lg md:text-xl text-gray-200 border-b border-gray-700 pb-2 mb-2">
            Backend and Database
          </h2>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap my-4 md:my-7 justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="PostgreSQL logo"
                src={postgresqlIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">PostgreSQL</p>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#a9a9a9] rounded-lg flex flex-col items-center justify-center hover:scale-110 duration-300">
              <img
                alt="NodeJS logo"
                src={nodeJSIcon}
                className="w-1/2 md:w-3/5"
              />
              <p className="text-xs sm:text-sm md:text-base">NodeJS</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
