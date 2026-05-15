import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/home/ProjectsSection";
import TechStack from "../components/home/TechStack";
import temp_avatar from "../assets/temp_avatar.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-100">
      
      <Navbar />
      
      {/* name + profile pic */}
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
              className="font-bold text-5xl pb-2 text-center sm:text-6xl md:text-7xl md:text-left lg:text-8xl
                bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Lucy Chen
            </h1>
            <p className="mt-2 text-gray-400 text-base text-center md:text-lg md:text-left">
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
        <TechStack />
        
      </main>
      <Footer />
    </div>
  );
}

export default Home;
