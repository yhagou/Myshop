import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductsList } from "./Components/ProductList/ProductList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductsList />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
