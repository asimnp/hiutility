import { useLocation } from "react-router";
import { useEffect } from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import NewTools from "../components/NewTools";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div className="container mx-auto mt-3">
        <Hero />
        <NewTools />
      </div>
      <About />
      <Contact />
    </>
  );
}
