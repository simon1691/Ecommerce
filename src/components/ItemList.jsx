import React from "react";
import Item from "./Item";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ItemList = ({ productos }) => {
  return (
    <Flex
      mt={20}
      flexWrap={"wrap"}
      gap={10}
      justifyContent={"center"}
      mx={"auto"}
    >
      {productos.map((producto) => {
        return <Item producto={producto} key={producto.title}></Item>;
      })}
    </Flex>
  );
};

export default React.memo(ItemList);
