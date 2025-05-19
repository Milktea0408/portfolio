import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

// projects data
const projectsData = [
  {
    // personal website
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built with React and Tailwind CSS.",
    image: "./src//assets/default_project_image.jpg", // Replace with your image path
    technologies: ["React", "Tailwind", "JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/Milktea0408/personal_website/",
    liveUrl: "https://yourportfolio.com",
  },
  {
    // internship website project
    id: 2,
    title: "Internship Front-End Project",
    description:
      "A modern, responsive website built for a startup during my internship. I worked on front-end development and contributed to key sections of the site.",
    image: "./src//assets/default_project_image.jpg", // Replace with your image path
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    githubUrl: null, // private repo
    liveUrl: "https://ignitionstudio.co/",
  },
  {
    id: 3,
    title: "Weather Tracking App",
    description:
      // "A weather app that fetches and displays weather for a given location.",
      "Coming soon!",
    image: "./src//assets/default_project_image.jpg", // Replace with your image path
    technologies: ["React", "Tailwind", "HTML", "CSS", "JavaScript"],
    // githubUrl: "https://github.com/yourusername/task-app",
    githubUrl: null,
    // liveUrl: "https://yourtaskapp.com",
    liveUrl: null,
  },
  // Add more projects as needed
];

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Navigate to previous project
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get current project
  const currentProject = projectsData[currentIndex];

  return (
    <section>
      {/* Project carousel */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700">
        {/* Project content */}
        <div className="flex flex-col md:flex-row">
          {/* Project image */}
          <div className="w-full md:w-1/2 h-48 md:h-80 relative">
            {currentProject.image ? (
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <p className="text-gray-600">Project Screenshot</p>
              </div>
            )}
          </div>

          {/* Project details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-900">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {currentProject.title}
              </h2>
              <p className="text-gray-300 mb-4">{currentProject.description}</p>

              {/* Technologies used */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-200">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full border border-gray-600 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {/* only show the github btn if the url is not null */}
              {currentProject.githubUrl && (
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors border border-gray-600 hover:border-gray-500"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}

              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md hover:from-blue-500 hover:to-purple-500 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-4">
          <button
            onClick={prevProject}
            className="bg-gray-800/70 hover:bg-gray-700 text-white p-1 md:p-2 rounded-full border border-gray-700 transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ArrowLeft size={isMobile ? 16 : 24} />
          </button>
          <button
            onClick={nextProject}
            className="bg-gray-800/70 hover:bg-gray-700 text-white p-1 md:p-2 rounded-full border border-gray-700 transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ArrowRight size={isMobile ? 16 : 24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-2 left-0 right-0">
          <div className="flex justify-center gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 w-4"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
