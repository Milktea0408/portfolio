// import linkedinIcon from "../assets/linkedin.svg";
// import emailIcon from "../assets/email.svg";
// import githubIcon from "../assets/github.svg";

import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";

function Footer() {
  return (
    <section className="flex gap-3 w-full flex items-center justify-center px-4 py-3 md:px-8 md:py-6">
      <a
        className="group cursor-pointer h-4 w-4"
        href="https://linkedin.com/in/lucy-c-791635216"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon linkedinGradientId="linkedinGradientFooter" />
      </a>
      <a
        className="group cursor-pointer h-4 w-4"
        href="https://github.com/Milktea0408"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon githubGradientId="githubGradientFooter" />
      </a>
      <a
        className="group cursor-pointer h-4 w-4"
        href="mailto:lucychen030408@gmail.com"
      >
        <EmailIcon emailGradientId="emailGradientFooter" />
      </a>
    </section>
  );
}

export default Footer;
