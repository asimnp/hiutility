import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewTools from "../components/NewTools";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto mt-3">
        <Navbar />
        <hr className="text-gray-100 mt-3" />
        <Hero />
        <SearchBar />
        <NewTools />
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
