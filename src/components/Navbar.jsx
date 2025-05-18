import { useState } from "react";
import { useNavigate } from "react-router-dom";
// icons 
import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";

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
      {/* mobile navbar - 'md' prefix for 768px and above only 
      hidden for screens lower than 768px */}
      <nav className="hidden md:bg-black md:fixed md:top-0 md:w-full md:text-white md:flex md:items-center md:justify-between md:px-8 md:py-4 z-10">
        {/* navlinks */}
        <section className="flex gap-5">
          <a
            href="/home"
            onClick={(e) => goToPage(e, "/home")}
            className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => goToPage(e, "/about")}
            className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => goToPage(e, "/contact")}
            className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100"
          >
            Contact
          </a>
        </section>

        {/* name in the middle */}
        <section
          onClick={(e) => goToPage(e, "/home")}
          className="font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100"
        >
          LUCY CHEN
        </section>

        {/* socials */}
        <section className="flex gap-5">
          <a
            className="group cursor-pointer h-4 w-4"
            href="https://linkedin.com/in/lucy-c-791635216"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon linkedinGradientId="linkedinGradientDesktop" />
          </a>
          <a
            className="group cursor-pointer h-4 w-4"
            href="https://github.com/Milktea0408"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon githubGradientId="githubGradientDesktop" />
          </a>
          <a
            className="group cursor-pointer h-4 w-4"
            href="mailto:lucychen030408@gmail.com"
          >
            <EmailIcon emailGradientId="emailGradientDesktop" />
          </a>
        </section>
      </nav>

      {/* mobile navbar - 'md:hidden' means to hide this section
      when the screen is above 768px */}
      <nav className="md:hidden bg-black fixed top-0 w-full text-white flex items-center justify-between px-4 py-3 z-10">
        {/* name in top left corner */}
        <section
          onClick={(e) => goToPage(e, "/home")}
          className="font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100"
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
              href="/home"
              onClick={(e) => goToPage(e, "/home")}
              className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => goToPage(e, "/about")}
              className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => goToPage(e, "/contact")}
              className="cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text"
            >
              Contact
            </a>

            {/* socials */}
            <div className="flex gap-3 mt-2">
              <a
                className="group cursor-pointer h-4 w-4"
                href="https://linkedin.com/in/lucy-c-791635216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon linkedinGradientId="linkedinGradientMobile" />
              </a>
              <a
                className="group cursor-pointer h-4 w-4"
                href="https://github.com/Milktea0408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon githubGradientId="githubGradientMobile" />
              </a>
              <a
                className="group cursor-pointer h-4 w-4"
                href="mailto:lucychen030408@gmail.com"
              >
                <EmailIcon emailGradientId="emailGradientMobile" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
