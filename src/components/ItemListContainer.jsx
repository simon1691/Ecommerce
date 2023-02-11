import React from "react";
import { Box } from "@chakra-ui/react";
import ItemList from "./ItemList"

const ItemListContainer = () => {
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
      <ItemList/>
      </Box>
    </Box>
  );
};

export default ItemListContainer;
