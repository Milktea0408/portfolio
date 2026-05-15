import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LinkedInIcon from "../icons/LinkedInIcon";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goToPage(e, page) {
    e.preventDefault();
    navigate(page);
    setMenuOpen(false);
  }

  const isActive = (path) => currentPath === path;

  const linkBase =
    "font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200";
  const activeLink = `${linkBase} text-cream`;
  const inactiveLink = `${linkBase} text-cream/40 hover:text-cream`;

  const SocialIcon = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-4 h-4 text-cream/40 hover:text-cream transition-colors duration-200"
    >
      {children}
    </a>
  );

  return (
    <>
      {/* Desktop */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
      >
        <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between px-8 py-5">
          {/* Links left */}
          <div className="flex gap-8">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <a
                key={path}
                href={path}
                onClick={(e) => goToPage(e, path)}
                className={isActive(path) ? activeLink : inactiveLink}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Logo center */}
          <button
            onClick={(e) => goToPage(e, "/")}
            className="font-display italic text-[1.05rem] text-cream hover:text-cream/60 transition-colors duration-200 tracking-wide"
          >
            Lucy Chen
          </button>

          {/* Socials right */}
          <div className="flex gap-4 items-center">
            <SocialIcon href="https://linkedin.com/in/lucy-c-791635216">
              <LinkedInIcon linkedinGradientId="nav-d-li" />
            </SocialIcon>
            <SocialIcon href="https://github.com/Milktea0408">
              <GithubIcon githubGradientId="nav-d-gh" />
            </SocialIcon>
            <a
              href="mailto:lucychen030408@gmail.com"
              className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity duration-200"
            >
              <EmailIcon emailGradientId="nav-d-em" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav
        className={`md:hidden fixed top-0 w-full z-50 bg-ink/95 backdrop-blur-md border-b border-white/5`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={(e) => goToPage(e, "/")}
            className="font-display italic text-cream text-base hover:text-cream/60 transition-colors"
          >
            Lucy Chen
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cream/60 hover:text-cream transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="px-5 pb-5 pt-1 flex flex-col gap-5 border-t border-white/5">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <a
                key={path}
                href={path}
                onClick={(e) => goToPage(e, path)}
                className={isActive(path) ? activeLink : inactiveLink}
              >
                {label}
              </a>
            ))}
            <div className="flex gap-4 mt-1">
              <a
                href="https://linkedin.com/in/lucy-c-791635216"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <LinkedInIcon linkedinGradientId="nav-m-li" />
              </a>
              <a
                href="https://github.com/Milktea0408"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <GithubIcon githubGradientId="nav-m-gh" />
              </a>
              <a
                href="mailto:lucychen030408@gmail.com"
                className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <EmailIcon emailGradientId="nav-m-em" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
