import { useNavigate } from "react-router-dom";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";

function Navbar() {
  const navigate = useNavigate();

  function goToPage(page) {
    navigate(page);
  }

  return (
    <nav className="fixed top-0 w-full bg-[#a9a9a9] text-white flex items-center justify-between px-8 py-4">
      {/* navlinks */}
      <section className="flex gap-3">
        <a
          onClick={() => goToPage("/home")}
          className="cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          Home
        </a>
        <a
          onClick={() => goToPage("/contact")}
          className="cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          Contact
        </a>
        <a
          onClick={() => goToPage("/about")}
          className="cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          About
        </a>
      </section>

      {/* name in the middle */}
      <section
        onClick={() => goToPage("/home")}
        className="font-bold cursor-pointer hover:brightness-75 transition-all duration-100"
      >
        LUCY CHEN
      </section>

      {/* socials */}
      <section className="flex gap-3">
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
    </nav>
  );
}

export default Navbar;
