import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";

function Footer() {
  return (
    <section className="flex gap-3 w-full bg-[#a9a9a9] flex items-center px-4 md:px-8 py-3">
      <a
        className="cursor-pointer"
        href="https://linkedin.com/in/lucy-c-791635216"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="h-6 w-6 hover:brightness-75 transition-all duration-100"
        />
      </a>
      <a
        className="cursor-pointer"
        href="https://github.com/Milktea0408"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="h-6 w-6 hover:brightness-75 transition-all duration-100"
        />
      </a>
      <a className="cursor-pointer" href="mailto:lucychen030408@gmail.com">
        <img
          src={emailIcon}
          alt="Email"
          className="h-6 w-6 hover:brightness-75 transition-all duration-100"
        />
      </a>
    </section>
  );
}

export default Footer;