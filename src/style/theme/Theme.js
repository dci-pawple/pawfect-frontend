import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff9e9a",
      main: "#f76c6c",
      dark: "#bf3a41",
      contrastText: "#fff",
    },
    secondary: {
      light: "#464646",
      main: "#1f1f1f",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: "Poppins",
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
