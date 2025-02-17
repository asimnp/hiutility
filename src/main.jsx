import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import ToolsProvider from "./context/ToolsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToolsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="tools" element={<Tools />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToolsProvider>
  </StrictMode>
);
