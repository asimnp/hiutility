import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div className="container mx-auto mt-3">
      <Navbar />
      <hr className="text-gray-100 mt-3" />
      <Hero />
      <SearchBar />
    </div>
  );
}
