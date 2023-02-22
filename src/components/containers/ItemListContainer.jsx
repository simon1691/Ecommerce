import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("El Api no cargo");
      }
    };
    fetchData();
  }, []);

  const categoriaFilter = productos.filter(
    (producto) => producto.category === id
  );

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
