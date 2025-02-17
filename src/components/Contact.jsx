import { LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div id="contact" className="max-w-4xl mx-auto mt-3 text-center mb-22">
      <div className="text-3xl font-medium mb-5">Get in Touch</div>
      <p className="text-gray-500 mb-5">
        Have questions or suggestions? We&apos;d love to hear from you. Reach
        out to us through any of these channels.
      </p>
      <div className="flex justify-center items-center gap-7">
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
