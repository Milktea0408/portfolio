import { useState } from "react";
import { useNavigate } from "react-router-dom";
// icons from assets folder
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
// hamburger and X icon from npm library
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  // usestate for opening/closing menu
  const [menuOpen, setMenuOpen] = useState(false);

  // a fuction to go to a specified route/page
  function goToPage(e, page) {
    e.preventDefault();
    navigate(page);
    // close menu after going to the other page
    setMenuOpen(false);
  }

  return (
    <>
      {/* mobile neavbar - 'md' prefix for 768px and above only 
      hidden for screens lower than 768px */}
      <nav className="hidden md:bg-black md:fixed md:top-0 md:w-full md:text-white md:flex md:items-center md:justify-between md:px-8 md:py-4">
        {/* navlinks */}
        <section className="flex gap-5">
          <a
            onClick={(e) => goToPage(e, "/home")}
            className="cursor-pointer text-sm hover:brightness-75 transition-all duration-100"
          >
            Home
          </a>
          <a
            onClick={(e) => goToPage(e, "/about")}
            className="cursor-pointer text-sm hover:brightness-75 transition-all duration-100"
          >
            About
          </a>
          <a
            onClick={(e) => goToPage(e, "/contact")}
            className="cursor-pointer text-sm hover:brightness-75 transition-all duration-100"
          >
            Contact
          </a>
        </section>

        {/* name in the middle */}
        <section
          onClick={(e) => goToPage(e, "/home")}
          className="font-bold cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          LUCY CHEN
        </section>

        {/* socials */}
        <section className="flex gap-5">
          <a
            className="cursor-pointer"
            href="https://linkedin.com/in/lucy-c-791635216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-4 w-4 hover:brightness-75 transition-all duration-100"
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
              className="h-4 w-4 hover:brightness-75 transition-all duration-100"
            />
          </a>
          <a className="cursor-pointer" href="mailto:lucychen030408@gmail.com">
            <img
              src={emailIcon}
              alt="Email"
              className="h-4 w-4 hover:brightness-75 transition-all duration-100"
            />
          </a>
        </section>
      </nav>

      {/* mobile navbar - 'md:hidden' means to hide this section
      when the screen is above 768px */}
      <nav className="md:hidden bg-black fixed top-0 w-full text-white flex items-center justify-between px-4 py-3">
        {/* name in top left corner */}
        <section
          onClick={() => goToPage("/home")}
          className="font-bold cursor-pointer hover:brightness-75 transition-all duration-100"
        >
          LUCY CHEN
        </section>
        {/* hamburger icon - opens up a menu and toggles between them */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* menu dropdown */}
        {menuOpen && (
          <div className="md:hidden fixed top-12 left-0 w-full bg-black text-white flex flex-col gap-4 px-4 py-3 z-10">
            <a
              onClick={(e) => goToPage(e, "/home")}
              className="cursor-pointer text-sm hover:brightness-75"
            >
              Home
            </a>
            <a
              onClick={(e) => goToPage(e, "/about")}
              className="cursor-pointer text-sm hover:brightness-75"
            >
              About
            </a>
            <a
              onClick={(e) => goToPage(e, "/contact")}
              className="cursor-pointer text-sm hover:brightness-75"
            >
              Contact
            </a>
            <div className="flex gap-3 mt-2">
              <a
                href="https://linkedin.com/in/lucy-c-791635216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Milktea0408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="h-4 w-4" />
              </a>
              <a href="mailto:lucychen030408@gmail.com">
                <img src={emailIcon} alt="Email" className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
