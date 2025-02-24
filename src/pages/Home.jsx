import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import NewTools from "../components/NewTools";

export default function HomePage() {
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
