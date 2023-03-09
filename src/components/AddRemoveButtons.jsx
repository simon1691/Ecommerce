import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Flex, Icon, Button, Text } from "@chakra-ui/react";
import { useCartContext } from "./context/CartContext";

const AddRemoveButtons = ({ producto }) => {
  const { addItemToCart, removeItemCart } = useCartContext();
  return (
    <Flex
      mt="4"
      width="100%"
      bg="#9066ff"
      borderRadius="6"
      alignItems={"center"}
    >
      <Button
        onClick={() => removeItemCart(producto)}
        px={3}
        backgroundColor={"transparent"}
        minW={"27px"}
        flexGrow={1}
        lineHeight={0}
        _hover={{
          bg: "#704fc8",
        }}
        color="white"
      >
        -
      </Button>
      <Button
        onClick={() => addItemToCart(producto)}
        bg={"transparent"}
        placement={"top"}
        color={"white"}
        fontSize={"1.2em"}
        d={"flex"}
        alignItems={"center"}
        flexGrow={2}
        _hover={{
          bg: "#704fc8",
        }}
      >
        <Text me={1} fontSize={"md"}>
          Add To Cart
        </Text>
        <Icon
          color="current"
          as={MdOutlineShoppingCart}
          h={5}
          w={5}
          alignSelf={"center"}
          ms={1}
        />
      </Button>
      <Button
        onClick={() => addItemToCart()}
        px={3}
        backgroundColor={"transparent"}
        minW={"15px"}
        flexGrow={1}
        lineHeight={0}
        color="white"
        _hover={{
          bg: "#704fc8",
        }}
      >
        +
      </Button>
    </Flex>
  );
};

export default AddRemoveButtons;
