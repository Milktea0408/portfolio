import { useNavigate } from "react-router-dom";
// icons from assets folder
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";

function Navbar() {
  const navigate = useNavigate();

  function goToPage(page) {
    navigate(page);
  }

  return (
    <>
      {/* mobile neavbar - 'md' prefix for 768px and above only 
      hidden for screens lower than 768px */}
      <nav className="hidden md:fixed md:top-0 md:w-full md:bg-[#a9a9a9] md:text-white md:flex md:items-center md:justify-between md:px-8 md:py-4">
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

      {/* mobile navbar - 'md:hidden' means to hide this section
      when the screen is above 768px */}
      <nav className="md:hidden fixed top-0 w-full bg-[#a9a9a9] text-white items-center justify-between px-4 py-3">
        {/* name in top left corner */}
        <section
          onClick={() => goToPage("/home")}
          className="font-bold cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          LUCY CHEN
        </section>
        {/* hamburger icon - opens up a menu */}
      </nav>
    </>
  );
}

export default Navbar;
