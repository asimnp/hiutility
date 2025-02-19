import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import ToolsProvider from "./context/ToolsProvider.jsx";
import App from "./App.jsx";
import Tools from "./pages/Tools.jsx";
import HomePage from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

// routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToolsProvider>
      <RouterProvider router={router} />
    </ToolsProvider>
  </StrictMode>
);
