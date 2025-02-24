import { ToolsContext } from "./tools";

export default function ToolsProvider({ children }) {
  const data = {
    tools: [
      {
        name: "Password Generator",
        description: "Create, strong, secure passwords",
        path: "password-generator",
      },
      {
        name: "Currency Converter",
        description: "Convert between different currencies",
        path: "currency-converter",
      },
      {
        name: "Todo",
        description:
          "Organize tasks, set priorities, and track progress effortlessly.",
        path: "todo",
      },
      {
        name: "Weather",
        description:
          "Real-time forecasts and conditions to help you plan your day.",
        path: "weather",
      },
      {
        name: "AI Chat",
        description:
          "Seamless conversations, instant responses, and intelligent assistance.",
        path: "ai-chat",
      },
    ],
  };
  return <ToolsContext.Provider value={data}>{children}</ToolsContext.Provider>;
}
