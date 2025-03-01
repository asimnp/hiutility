import { LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      id="contact"
      className="mx-5 mt-3 mb-22 max-w-4xl text-center sm:mx-auto"
    >
      <div className="mb-5 text-3xl font-medium dark:text-gray-300">
        Get in Touch
      </div>
      <p className="mb-5 text-gray-500 dark:text-gray-400">
        Have questions or suggestions? We&apos;d love to hear from you. Reach
        out to us through any of these channels.
      </p>
      <div className="flex items-center justify-center gap-7 dark:text-gray-300">
        <a href="#" className="hover:text-red-600">
          <LuMail size={30} />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaXTwitter size={30} />
        </a>
      </div>
    </div>
  );
}
