import NavBar from "./components/NavBar";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./components/containers/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartProvider, useCartContext } from "./components/context/CartContext";
import { useEffect } from "react";

function App() {
  const { setCartItem, setCounter } = useCartContext();

  useEffect(() => {
    const counter = Number(localStorage.getItem("counter"));
    const localCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (localCartItems && counter) {
      setCartItem(localCartItems);
      setCounter(counter);
    }
  }, []);

  return (
    <BrowserRouter>
      <Container maxW="100%" padding="0">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default () => (
  <CartProvider>
    {" "}
    <App></App>{" "}
  </CartProvider>
);
