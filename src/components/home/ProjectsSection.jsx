import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio (Current website)",
    description:
      "A responsive personal portfolio website built with React and Tailwind CSS.",
    image: "./src/assets/portfolio.png",
    technologies: ["React", "Tailwind", "JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/Milktea0408/personal_website/",
    liveUrl: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Internship Front-End Project",
    description:
      "A responsive website built for a startup during an internship. Contributed to front-end development and key sections of the website.",
    image: "./src/assets/internship_project.png",
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    githubUrl: null,
    liveUrl: "https://ignitionstudio.co/",
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "",
    image: "",
    technologies: [],
    githubUrl: null,
    liveUrl: null,
  },
];

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prevProject = () => {
    setSlideDirection("left");
    setCurrentIndex((i) => (i === 0 ? projectsData.length - 1 : i - 1));
  };

  const nextProject = () => {
    setSlideDirection("right");
    setCurrentIndex((i) => (i === projectsData.length - 1 ? 0 : i + 1));
  };

  const goToProject = (index) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const project = projectsData[currentIndex];

  return (
    <div>
      {/* Card */}
      <div
        key={project.id}
        className={`project-card-enter project-card-enter-${slideDirection} border border-white/[0.08] bg-white/[0.02] grid grid-cols-1 md:grid-cols-2 min-h-[300px] md:min-h-[340px] transition-colors duration-500 hover:border-white/[0.14] hover:bg-white/[0.025]`}
      >
        <div className="overflow-hidden bg-white/[0.03] flex flex-col border-b md:border-b-0 md:border-r border-white/[0.06]">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 ml-3 h-4 bg-white/[0.03] rounded px-2 text-[0.5rem] text-cream/15 flex items-center font-mono">
              {project.title}
            </div>
          </div>

          {/* Image pane */}
          <div className="relative aspect-[16/10] md:aspect-auto md:flex-1 bg-white/[0.03]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover md:object-cover object-top grayscale-[30%] opacity-80 hover:opacity-100 hover:scale-[1.025] transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-cream/15">
                  No preview
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Info pane */}
        <div className="p-7 md:p-10 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.12em] text-cream/20 mb-4">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projectsData.length).padStart(2, "0")}
            </p>
            <h3 className="font-display font-normal text-[1.5rem] tracking-tight text-cream leading-snug mb-3">
              {project.title}
            </h3>
            {project.description && (
              <p className="font-mono text-[0.68rem] leading-[1.75] text-cream/42 mb-5">
                {project.description}
              </p>
            )}
            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((t, index) => (
                  <span
                    key={t}
                    className="project-tech-chip font-mono text-[0.58rem] tracking-[0.06em] px-2 py-1 border border-white/[0.1] text-cream/38"
                    style={{ "--chip-delay": `${index * 55}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-cream/45 border border-white/[0.1] px-3 py-2 hover:text-cream hover:border-white/[0.3] hover:bg-white/[0.04] transition-all duration-200"
              >
                <Github size={11} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-cream/65 border border-white/[0.15] bg-white/[0.05] px-3 py-2 hover:text-cream hover:border-white/[0.3] hover:bg-white/[0.09] transition-all duration-200"
              >
                <ExternalLink size={11} /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goToProject(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-sm transition-all duration-200 border-none cursor-pointer ${
                i === currentIndex
                  ? "w-5 bg-cream/65"
                  : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="w-8 h-8 border border-white/[0.1] text-cream/45 flex items-center justify-center hover:text-cream hover:border-white/[0.3] hover:bg-white/[0.04] transition-all duration-200"
          >
            <ArrowLeft size={isMobile ? 12 : 14} />
          </button>
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="w-8 h-8 border border-white/[0.1] text-cream/45 flex items-center justify-center hover:text-cream hover:border-white/[0.3] hover:bg-white/[0.04] transition-all duration-200"
          >
            <ArrowRight size={isMobile ? 12 : 14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
