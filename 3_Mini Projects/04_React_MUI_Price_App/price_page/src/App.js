import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const themeSelect = createTheme({
  palette: {
    primary: {
      light: "#eff6f5",
      main: "#ECF4F3",
      dark: "#a5aaaa",
    },
    secondary: {
      light: "#91e2da",
      main: "#76DBD1",
      dark: "#529992",
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <ThemeProvider theme={themeSelect}>
        <Nav />
        <Header />
        <Cards />
        <Content />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
