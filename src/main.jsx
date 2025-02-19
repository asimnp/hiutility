import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Tools from "./pages/Tools.jsx";
import ToolsProvider from "./context/ToolsProvider.jsx";
import HomePage from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 page not found</div>,
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
