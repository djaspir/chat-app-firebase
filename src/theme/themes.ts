import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#d6dee1",
          borderRadius: "20px",
          width: "10px",
        },
      },
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

export { theme, darkTheme };
