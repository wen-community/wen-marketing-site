import React from "react";
import ThemeProvider from "@mui/system/ThemeProvider";
import { theme } from "./theme";
import { HomeScrollContextProvider } from "../contexts/HomeScrollContext";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <HomeScrollContextProvider>{children} </HomeScrollContextProvider>
    </ThemeProvider>
  );
}
