import { useState } from "react";
import { Send, CircleX } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactItems = [
  {
    type: "Email",
    value: "lucychen030408@gmail.com",
    href: "mailto:lucychen030408@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "lucy-c-791635216",
    href: "https://linkedin.com/in/lucy-c-791635216",
  },
  {
    type: "GitHub",
    value: "Milktea0408",
    href: "https://github.com/Milktea0408",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setSubmitStatus(null);
  };

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  async function submitForm(e) {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!isValidEmail(email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (name.length > 50) {
      setSubmitStatus({
        success: false,
        message: "Name must be 50 characters or less.",
      });
      return;
    }

    if (message.length > 2500) {
      setSubmitStatus({
        success: false,
        message: "Message must be 2500 characters or less.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "lucychen030408@gmail.com",
        },
        EMAILJS_CONFIG.publicKey,
      );
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus({ success: true, message: "Message sent." });
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-transparent border-none outline-none text-cream font-display text-base placeholder:text-cream/20 caret-cream";

  const hasError = submitStatus && !submitStatus.success;

  const buttonLabel = isSubmitting
    ? "Sending..."
    : hasError
      ? "Error"
      : "Send message";

  return (
    <div className="min-h-screen text-cream overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-5 md:px-8 pb-16">
        {/* PAGE HERO */}
        <header className="pt-36 md:pt-44 pb-14 border-b border-white/[0.07]">
          <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-cream/35 mb-4">
            Contact
          </p>
          <h1 className="font-display font-normal text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-cream mb-5">
            Let's
            <br />
            <em className="italic text-cream/50">connect.</em>
          </h1>
          <p className="font-mono text-[0.7rem] leading-[1.75] text-cream/38 max-w-md">
            Have a question, opportunity, or just want to say hello? Drop me a
            message.
          </p>
        </header>

        {/* LAYOUT */}
        <div className="pt-14 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          {/* LEFT — contact info */}
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-cream/22 mb-5">
              Reach me at
            </p>
            {contactItems.map(({ type, value, href }) => (
              <div
                key={type}
                className="border-t border-white/[0.07] py-4 last:border-b last:border-white/[0.07]"
              >
                <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-cream/28 mb-1">
                  {type}
                </p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-display text-[1rem] text-cream hover:text-cream/50 transition-colors duration-200"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* RIGHT — form */}
          <form onSubmit={submitForm} className="flex flex-col">
            {/* Name */}
            <div className="border-t border-white/[0.07] py-5">
              <label
                htmlFor="name"
                className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-cream/28 block mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="border-t border-white/[0.07] py-5">
              <label
                htmlFor="email"
                className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-cream/28 block mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="border-t border-b border-white/[0.07] py-5">
              <label
                htmlFor="message"
                className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-cream/28 block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {submitStatus && (
              <div
                className={`mt-5 px-4 py-3 font-mono text-[0.62rem] tracking-wide border ${
                  submitStatus.success
                    ? "bg-white/[0.03] border-white/[0.08] text-cream/55"
                    : "bg-red-900/10 border-red-500/15 text-red-300/65"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="mt-8 flex items-center gap-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.12em] uppercase bg-cream text-ink px-7 py-3 transition-opacity duration-200 ${
                  isSubmitting
                    ? "opacity-30 cursor-not-allowed"
                    : hasError
                      ? "opacity-50"
                      : "hover:opacity-70"
                } disabled:opacity-30 disabled:cursor-not-allowed`}
              >
                {hasError ? (
                  <CircleX size={14} strokeWidth={2.25} />
                ) : (
                  <Send size={14} strokeWidth={2.25} />
                )}
                {buttonLabel}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
