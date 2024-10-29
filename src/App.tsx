import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductsList } from "./Components/ProductList/ProductList";

function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyle />
    </>
  );
}

export default App;
