import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// profile pic
import temp_avatar from "../assets/temp_avatar.png";

function About() {
  const navigate = useNavigate();

  // goes back to the home page
  function toHomePage() {
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-32 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col gap-6 md:gap-10">
        {/* about yourself section */}
        <section>
          <h1 className="font-bold text-2xl md:text-3xl mb-3 md:mb-5">
            A Little Bit About Me
          </h1>
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-20">
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-xs sm:text-sm md:text-base">Hi there!</p>
              <p className="text-xs sm:text-sm md:text-base">
                I'm Lucy. A Sydney-based web developer with a background in
                Computer Science.
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                I enjoy building clean, responsive interfaces and creating
                meaningful user experiences. I'm always looking to learn and
                grow — whether through uni, internships, or side projects.
              </p>
            </div>
            <img
              alt="profile image"
              src={temp_avatar}
              className="flex-1 w-48 h-auto object-contain"
            />
          </div>
        </section>

        {/* hobbies/ interests section */}
        <section>
          <h1 className="font-bold text-2xl md:text-3xl mb-3 md:mb-5">
            Hobbies and Interests
          </h1>
          <p className="text-xs my-4 sm:text-sm md:text-base">
            Outside of tech, I enjoy spending time with quiet hobbies that help
            me recharge.
          </p>
          <section className="flex flex-col gap-5 content-around sm:flex-row">
            <div className="flex flex-col gap-2 mt-2">
              <p>Favourite drinks</p>
              <img alt="interest image 1" />
              <p className="text-xs sm:text-sm md:text-base">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p>Music</p>
              <img alt="interest image 2" />
              <p className="text-xs sm:text-sm md:text-base">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p>Movies</p>
              <img alt="interest image 3" />
              <p className="text-xs sm:text-sm md:text-base">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </section>
        </section>
        {/* cta button to go back to home page where the projects are */}
        <div className="flex justify-center">
          <button
            onClick={toHomePage}
            className={`mt-5 mb-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 bg-white text-black border border-black hover:bg-gray-500 hover:text-white`}
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
