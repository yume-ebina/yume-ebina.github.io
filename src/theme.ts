"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#222",
    },
    secondary: {
      main: "#222",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
