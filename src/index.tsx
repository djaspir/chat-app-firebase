import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./state/store/store";
import DarkThemeProvider from "./theme/DarkThemeProvider";

// TODO Theming with Redux

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkThemeProvider>
        <CssBaseline />
        <App />
      </DarkThemeProvider>
    </Provider>
  </React.StrictMode>
);
