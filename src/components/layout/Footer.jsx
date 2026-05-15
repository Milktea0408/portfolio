import LinkedInIcon from "../icons/LinkedInIcon";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.07] px-8 py-6 flex items-center justify-between flex-wrap gap-4">
      <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-cream/25">
        © {new Date().getFullYear()} Lucy Chen
      </span>
      <div className="flex gap-4 items-center">
        <a
          href="https://linkedin.com/in/lucy-c-791635216"
          target="_blank"
          rel="noopener noreferrer"
          className="w-4 h-4 opacity-35 hover:opacity-90 transition-opacity duration-200"
        >
          <LinkedInIcon linkedinGradientId="footer-li" />
        </a>
        <a
          href="https://github.com/Milktea0408"
          target="_blank"
          rel="noopener noreferrer"
          className="w-4 h-4 opacity-35 hover:opacity-90 transition-opacity duration-200"
        >
          <GithubIcon githubGradientId="footer-gh" />
        </a>
        <a
          href="mailto:lucychen030408@gmail.com"
          className="w-4 h-4 opacity-35 hover:opacity-90 transition-opacity duration-200"
        >
          <EmailIcon emailGradientId="footer-em" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
