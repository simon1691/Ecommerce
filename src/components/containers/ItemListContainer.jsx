import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setLoader(true);
      }
    };
    fetchData();
    setLoader(false);
  }, []);

  const categoriaFilter = productos.filter(
    (producto) => producto.category === id
  );

  if (loader) {
    return (
      <Box
        h={"100vh"}
        display="flex"
        alignItems="center"
        flexDir={"column"}
        justifyContent="center"
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
      >
        <Loader size="xl"></Loader>
        <Box as="h1" mt={3}>
          Cargando Productos...
        </Box>
      </Box>
    );
  }
  return (
    <Box maxW="100%">
      <Box
        maxW="1280px"
        my="5"
        mx="auto"
        display="flex"
        alignItems="center"
        className="container-nav"
        justifyContent="space-between"
        padding="10px"
        color="white"
      >
        {id ? (
          <ItemList productos={categoriaFilter} />
        ) : (
          <ItemList productos={productos} />
        )}
      </Box>
    </Box>
  );
};

export default ItemListContainer;
