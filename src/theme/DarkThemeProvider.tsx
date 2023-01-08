import React from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppState } from "../state/store/store";

interface IProps {
  children: React.ReactNode;
}

const DarkThemeProvider = ({ children }: IProps) => {
  const darkThemeEnabled = useSelector(
    (state: AppState) => state.darkThemeEnabled
  );

  const defaultTheme = createTheme({});

  const theme = createTheme({
    palette: {
      mode: darkThemeEnabled ? "dark" : "light",
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            whiteSpace: "nowrap",
          },

          "*::-webkit-scrollbar": {
            width: "10px",
          },
          "*::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: defaultTheme.palette.action.disabled,
            borderRadius: "20px",
            width: "10px",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DarkThemeProvider;
