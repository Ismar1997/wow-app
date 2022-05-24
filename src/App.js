import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products/index.";
import { productsData, productsDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products
        heading='"Never give a child a sword." - Proverb '
        data={productsData}
      />
      <Feature />
      <Products
        heading='" Buy some nunchaks or something " - Cynthia Hand'
        data={productsDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default App;
