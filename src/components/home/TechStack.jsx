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

const techStackCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Javascript",
        icon: javascriptIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "Typescript",
        icon: typescriptIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "Python",
        icon: pythonIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
      {
        name: "C",
        icon: cIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
      {
        name: "Java",
        icon: javaIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "Bash",
        icon: bashIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: reactIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "HTML",
        icon: html5Icon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "CSS",
        icon: cssIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
      {
        name: "BootStrap",
        icon: boostrapIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
      {
        name: "Tailwind",
        icon: tailwindIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "Material UI",
        icon: materialUIIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: postgresqlIcon,
        colorClass: "hover:shadow-blue-500/20 group-hover:text-blue-400",
      },
      {
        name: "NodeJS",
        icon: nodeJSIcon,
        colorClass: "hover:shadow-purple-500/20 group-hover:text-purple-400",
      },
    ],
  },
];

const SkillCard = ({ name, icon, colorClass }) => (
  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-700 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 group">
    <div className="w-1/2 md:w-3/5 group-hover:scale-110 transition-transform duration-300">
      <img alt={`${name} logo`} src={icon} className="w-full" />
    </div>
    <p
      className={`text-xs sm:text-sm md:text-base mt-2 transition-colors duration-300 ${colorClass}`}
    >
      {name}
    </p>
  </div>
);

function TechStack() {
  return (
    <section className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
      <h1
        className="font-bold text-2xl md:text-3xl mb-3 md:mb-5
    bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Technical Skills
      </h1>

      {techStackCategories.map((category) => (
        <div key={category.title}>
          <h2 className="text-lg md:text-xl text-gray-200 border-b border-gray-700 pb-2 mb-2">
            {category.title}
          </h2>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap my-4 md:my-7 justify-center">
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                colorClass={skill.colorClass}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechStack;
