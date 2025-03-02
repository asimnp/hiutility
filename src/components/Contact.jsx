import { useRef } from "react";
import emailjs from "@emailjs/browser";
import envVars from "../config/env.js";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const form = useRef();
  const [sending, setSending] = useState(false);

  const handleEmailSend = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        envVars.EMAIL_SERVICE_ID,
        envVars.EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: envVars.EMAIL_PUBLIC_KEY,
        }
      )
      .then(() => {
        setMessage({ type: "success", message: "Email send successfully!" });
        form.current?.reset();
        setSending(false);
      })
      .catch((error) => {
        setMessage({
          type: "error",
          message: "Failed to sent email. Please try again later.",
        });
        setSending(false);
      });
  };

  return (
    <div
      id="contact"
      className="mx-5 mt-3 mb-22 max-w-4xl text-center sm:mx-auto"
    >
      <div className="mb-5 text-3xl font-medium dark:text-gray-300">
        Get in Touch
      </div>
      <p className="mb-5 text-gray-500 dark:text-gray-400">
        Have questions or suggestions? We&apos;d love to hear from you.
      </p>
      {message && (
        <div
          className={`py-2 ${message.type === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          {message.message}
        </div>
      )}

      <form onSubmit={handleEmailSend} ref={form}>
        <input
          type="text"
          name="from_name"
          className="my-2 w-full rounded-md border border-gray-200 p-3 dark:text-gray-300"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="from_email"
          className="my-2 w-full rounded-md border border-gray-200 p-3 dark:text-gray-300"
          placeholder="Your email address"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="my-2 w-full rounded-md border border-gray-200 p-3 dark:text-gray-300"
          required
        ></textarea>
        <button
          type="submit"
          disabled={sending}
          className={`w-full cursor-pointer rounded-md bg-red-600 px-6 py-3 text-xl font-medium text-white hover:bg-red-700 ${sending ? "opacity-40" : ""}`}
        >
          {sending ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
}
