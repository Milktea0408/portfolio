import bashIcon from "../../assets/bash.svg";
import boostrapIcon from "../../assets/bootstrap.svg";
import cIcon from "../../assets/c_programming.svg";
import cssIcon from "../../assets/css.svg";
import html5Icon from "../../assets/html5.svg";
import javaIcon from "../../assets/java.svg";
import javascriptIcon from "../../assets/javascript.svg";
import materialUIIcon from "../../assets/materialui.svg";
import nodeJSIcon from "../../assets/nodejs.svg";
import postgresqlIcon from "../../assets/postgresql.svg";
import pythonIcon from "../../assets/python.svg";
import reactIcon from "../../assets/react.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import typescriptIcon from "../../assets/typescript.svg";
import dockerIcon from "../../assets/docker.svg";
import gitIcon from "../../assets/git.svg";
import fastAPIIcon from "../../assets/fastapi.svg";
import shadcnIcon from "../../assets/shadcn.svg";
import vercelIcon from "../../assets/vercel.svg";
import memgraphIcon from "../../assets/memgraph.svg";
import cicdIcon from "../../assets/cicd.svg";

const techStackCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Javascript", icon: javascriptIcon },
      { name: "Typescript", icon: typescriptIcon },
      { name: "Python", icon: pythonIcon },
      { name: "C", icon: cIcon },
      { name: "Java", icon: javaIcon },
      { name: "Bash", icon: bashIcon },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "HTML", icon: html5Icon },
      { name: "CSS", icon: cssIcon },
      { name: "Bootstrap", icon: boostrapIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Material UI", icon: materialUIIcon },
      { name: "shadcn", icon: shadcnIcon },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Node.js", icon: nodeJSIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Git", icon: gitIcon },
      { name: "FastAPI", icon: fastAPIIcon },
      { name: "Memgraph DB", icon: memgraphIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "CI/CD", icon: cicdIcon },
    ],
  },
];

const SkillPill = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-3 py-2 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200 cursor-default rounded-sm">
    <img
      src={icon}
      alt={`${name} icon`}
      className="w-4 h-4 object-contain opacity-80"
    />
    <span className="font-mono text-[0.66rem] tracking-[0.05em] text-cream/58 whitespace-nowrap group-hover:text-cream/90">
      {name}
    </span>
  </div>
);

function TechStack() {
  return (
    <div className="space-y-8">
      {techStackCategories.map((category) => (
        <div key={category.title}>
          <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-cream/25 mb-3 pb-3 border-b border-white/[0.06]">
            {category.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
