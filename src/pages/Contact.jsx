import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

function Contact() {
  // form state to collect input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // for loading and success/error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // function to submit the form and send email
  async function submitForm(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "lucychen030408@gmail.com",
    };

    try {
      await emailjs.send(
        // service key
        "service_bovp8sg",
        // template key
        "template_c7lxk4p",
        templateParams,
        // public key
        "JT5QdRlpHtiGqDCc8" 
      );

      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-28 px-4 md:px-8 ">
        <h1 className="font-bold text-center text-5xl">Contact me</h1>
        <form
          className="flex flex-col justify-items-center content-center mt-11 max-w-sm mx-auto"
          onSubmit={submitForm}
        >
          {/* Name input */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* Email input */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* message box */}
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message"
          ></textarea>

          {/* status message */}
          {submitStatus && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* submit btn */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-colors duration-300 
              ${
                isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black border border-black hover:bg-gray-700 hover:text-white"
              }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
