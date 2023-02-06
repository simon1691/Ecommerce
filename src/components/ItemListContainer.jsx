import React from "react";
import { Box } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box
    maxW="1440px"
    mx="auto"
    fontSize="40px"
    textAlign="center"
    padding="40px"
    fontWeight="bold"
    className="container-nav">
      <h1>{ greeting }</h1>
    </Box>
  );
};

export default ItemListContainer;
