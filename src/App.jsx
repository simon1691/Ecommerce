import NavBar from "./components/NavBar";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./components/containers/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Container maxW="100%" padding="0">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:id"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
