import React from "react";
import Item from "./Item";
import { Flex } from "@chakra-ui/react";

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
        const { title, id, price, image, category } = producto;
        return (
          <Item
            image={image}
            title={title}
            key={id}
            id={id}
            price={price}
            category={category}
          ></Item>
        );
      })}
    </Flex>
  );
};

export default React.memo(ItemList);
