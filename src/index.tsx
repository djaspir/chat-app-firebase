import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./state/store/store";
import DarkThemeProvider from "./theme/DarkThemeProvider";

import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <DarkThemeProvider>
      <CssBaseline />
      <App />
    </DarkThemeProvider>
  </Provider>
);
