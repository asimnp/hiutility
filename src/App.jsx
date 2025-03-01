import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col dark:bg-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
