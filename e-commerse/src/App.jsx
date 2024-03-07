import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const theme = {
    colors: {
      bg: "#e8f2e4",
      footer_bg: "#0a1435",
      btn: "#B5C0D0",
      border: "#CCD3CA",
      hr: "#ffffff",
      gradient:
        "linear-gradient(90deg, rgba(233,185,185,1) 0%, rgba(181,192,208,1) 72%, rgba(129,151,182,1) 100%)",
      shadow:
        "rgba(0,0,0,0.16) 0px 1px 3px 0px rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "700px",
      deskop: "1200px",
      max: "1600px"
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
