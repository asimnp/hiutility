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
        name: "Unit Converter",
        description: "Convert between different units",
        path: "unit-converter",
      },
    ],
  };
  return <ToolsContext.Provider value={data}>{children}</ToolsContext.Provider>;
}
