import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// TODO Theming with Redux

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar {
          width: 10px;
        }
      `,
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const darkTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },

  palette: {
    mode: "dark",
  },
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
