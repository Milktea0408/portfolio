import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16 px-4 md:px-8">
        <h1>Welcome to the Contact page!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
