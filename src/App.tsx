import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductCard } from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <Header />
      <ProductCard />
      <GlobalStyle />
    </>
  );
}

export default App;
