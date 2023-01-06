import { CssBaseline, PaletteOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

type CustomPaletteOptions = PaletteOptions & {
  type: string;
};

// TODO Theming with Redux

const theme = createTheme({});

const darkTheme = createTheme({
  palette: {
    type: "dark",
  } as CustomPaletteOptions,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={true ? theme : darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
