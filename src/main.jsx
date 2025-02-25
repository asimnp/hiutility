import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import ToolsProvider from "./context/ToolsProvider.jsx";
import App from "./App.jsx";
import Tools from "./pages/Tools.jsx";
import HomePage from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import CurrencyConverter from "./pages/tools/CurrencyConverter.jsx";
import PasswordGenerator from "./pages/tools/PasswordGenerator.jsx";
import Todo from "./pages/tools/Todo.jsx";
import AIChat from "./pages/tools/AIChat.jsx";
import Weather from "./pages/tools/Weather.jsx";

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
      {
        path: "/tools/currency-converter",
        element: <CurrencyConverter />,
      },
      {
        path: "/tools/password-generator",
        element: <PasswordGenerator />,
      },
      {
        path: "/tools/todo",
        element: <Todo />,
      },
      {
        path: "/tools/ai-chat",
        element: <AIChat />,
      },
      {
        path: "/tools/weather",
        element: <Weather />,
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
