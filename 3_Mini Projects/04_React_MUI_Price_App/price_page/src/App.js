import { ThemeProvider, createTheme } from "@mui/material";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const themeSelect = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
});

function App() {
  return (
    <>
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
