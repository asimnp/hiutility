import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="dark:bg-black min-h-screen w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
