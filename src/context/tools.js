import { createContext, useContext } from "react";

export const ToolsContext = createContext();

export const useTools = () => useContext(ToolsContext);
