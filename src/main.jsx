import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import ToolsProvider from "./context/ToolsProvider.jsx";
import ToolSingle from "./pages/ToolSingle.jsx";
import ToolsLayout from "./pages/layouts/ToolsLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToolsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="tools" element={<ToolsLayout />}>
            <Route path="" element={<Tools />} />
            <Route path=":toolSlug" element={<ToolSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToolsProvider>
  </StrictMode>
);
