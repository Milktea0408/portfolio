import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// icons
import LinkedInIcon from "../icons/LinkedInIcon";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";

// hamburger and X icon from npm library
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  // usestate for opening/closing menu
  const [menuOpen, setMenuOpen] = useState(false);
  // track current page
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Update currentPath when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // a fuction to go to a specified route/page
  function goToPage(e, page) {
    e.preventDefault();
    navigate(page);
    // close menu after going to the other page
    setMenuOpen(false);
  }

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return currentPath === path;
  };

  // active link class with the gradient effect always applied
  const activeClass =
    "cursor-pointer text-sm bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text";

  // non-active link class with hover effect
  const inactiveClass =
    "cursor-pointer text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-transparent hover:bg-clip-text transition-all duration-100";

  return (
    <>
      {/* desktop navbar */}
      <nav className="hidden md:bg-[#212121] md:fixed md:top-0 md:w-full md:text-white md:flex md:items-center md:justify-between md:px-8 md:py-4 z-10">
        {/* navlinks */}
        <section className="flex gap-5">
          <a
            href="/home"
            onClick={(e) => goToPage(e, "/home")}
            className={isActive("/home") ? activeClass : inactiveClass}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => goToPage(e, "/about")}
            className={isActive("/about") ? activeClass : inactiveClass}
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => goToPage(e, "/contact")}
            className={isActive("/contact") ? activeClass : inactiveClass}
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

      {/* mobile navbar */}
      <nav className="md:hidden bg-[#212121] fixed top-0 w-full text-white flex items-center justify-between px-4 py-3 z-10">
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
          <div className="md:hidden fixed top-12 left-0 w-full bg-[#212121] text-white flex flex-col gap-4 px-4 py-3 z-10">
            <a
              href="/home"
              onClick={(e) => goToPage(e, "/home")}
              className={isActive("/home") ? activeClass : inactiveClass}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => goToPage(e, "/about")}
              className={isActive("/about") ? activeClass : inactiveClass}
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => goToPage(e, "/contact")}
              className={isActive("/contact") ? activeClass : inactiveClass}
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
