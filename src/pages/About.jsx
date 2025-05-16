import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const navigate = useNavigate();
  
  // goes back to the home page
  function toHomePage() {
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-32 px-12 md:px-24 flex flex-col gap-10">
        {/* about yourself section */}
        <section>
          <h1 className="font-bold text-3xl mb-5">A Little Bit About Me</h1>
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-20">
            <p className="text-sm flex-1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <img alt="profile image" className="flex-1" />
          </div>
        </section>

        {/* hobbies/ interests section */}
        <secton>
          <h1 className="font-bold text-3xl mb-5">Hobbies and Interests</h1>
          <section className="flex flex-col gap-2 content-around sm:flex-row">
            <div className="flex flex-col gap-2 mt-2">
              <img alt="interest image 1" />
              <p className="text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <img alt="interest image 2" />
              <p className="text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <img alt="interest image 3" />
              <p className="text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </section>
        </secton>
        {/* cta button to go back to home page where the projects are */}
        <div className="flex justify-center">
          <button
            onClick={toHomePage}
            className={`mt-5 mb-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 bg-white text-black border border-black hover:bg-gray-700 hover:text-white`}
          >
            See my work
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
