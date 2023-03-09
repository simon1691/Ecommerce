import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import {
  RiDeleteBin6Line,
  RiAddCircleLine,
  RiIndeterminateCircleLine,
} from "react-icons/ri";
import Form from "./Form";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const {
    cartItem,
    addItemToCart,
    removeItemCart,
    resetItemCart,
    setCartItem,
    setCounter,
  } = useCartContext();

  const deleteCart = (cartItem) => {
    setCartItem([]);
    setCounter(0);
  };

  const totalQuantity = cartItem.map((item) => {
    const total = Number(item.quantity) * Number(item.price).toFixed(2);
    return total;
  });

  let globalTotal = totalQuantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(globalTotal.toFixed(2));

  return (
    <Box
      key={"test"}
      bg={useColorModeValue("white", "gray.800")}
      maxW="1250px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      boxShadow="md"
      transition="box-shadow 0.1s ease-in-out"
      cursor="pointer"
      _hover={{
        boxShadow: "xl",
      }}
      position="relative"
      m={"auto"}
      mt={"120px"}
    >
      {cartItem.length !== 0 ? (
        <Flex justifyContent={"space-between"}>
          <Box w={"100%"}>
            <TableContainer w={"100%"} maxH={"500px"} overflowY={"auto"} p={5}>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th pb={3} textAlign={"center"}>
                      Image
                    </Th>
                    <Th pb={3}>Product Name</Th>
                    <Th pb={3}>Price P/U</Th>
                    <Th pb={3}>Quantity</Th>
                    <Th pb={3}>Total Price</Th>
                    <Th pb={3} textAlign={"center"}>
                      Actions
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItem.map((item) => {
                    return (
                      <Tr key={item.id}>
                        <Td textAlign={"center"}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            maxW={"30px"}
                            maxH={"30px"}
                            m={"auto"}
                          ></Image>
                        </Td>
                        <Td maxW={"200px"} whiteSpace={"normal"}>
                          {item.title}
                        </Td>
                        <Td isNumeric>{item.price}</Td>
                        <Td isNumeric>{item.quantity}</Td>
                        <Td isNumeric>
                          ${(item.price * item.quantity).toFixed(2)}
                        </Td>
                        <Td textAlign={"center"}>
                          <Tooltip
                            label="-1"
                            placement={"top"}
                            shouldWrapChildren
                            hasArrow
                            arrowSize={10}
                            borderRadius={"5px"}
                            bg={"white"}
                            color={"black"}
                          >
                            <Button
                              onClick={() => {
                                removeItemCart(item);
                              }}
                              color={"#704fc8"}
                              w={"30px"}
                              h={"30px"}
                              minW={0}
                              lineHeight={0}
                              _hover={{
                                bg: "#704fc8",
                                color: "white",
                              }}
                              borderRadius={"50%"}
                              p={0}
                              mx={1}
                            >
                              <Icon
                                color="current"
                                as={RiIndeterminateCircleLine}
                                h={5}
                                w={5}
                                alignSelf={"center"}
                              />
                            </Button>
                          </Tooltip>
                          <Tooltip
                            label="+1"
                            placement={"top"}
                            shouldWrapChildren
                            hasArrow
                            arrowSize={10}
                            borderRadius={"5px"}
                            bg={"white"}
                            color={"black"}
                          >
                            <Button
                              onClick={() => {
                                addItemToCart(item);
                              }}
                              color={"#704fc8"}
                              w={"30px"}
                              h={"30px"}
                              minW={0}
                              lineHeight={0}
                              _hover={{
                                bg: "#704fc8",
                                color: "white",
                              }}
                              borderRadius={"50%"}
                              p={0}
                              mx={1}
                            >
                              <Icon
                                color="current"
                                as={RiAddCircleLine}
                                h={5}
                                w={5}
                                alignSelf={"center"}
                              />
                            </Button>
                          </Tooltip>
                          <Tooltip
                            label="Remove This Item"
                            placement={"top"}
                            shouldWrapChildren
                            hasArrow
                            arrowSize={10}
                            borderRadius={"5px"}
                            bg={"white"}
                            color={"black"}
                          >
                            <Button
                              onClick={() => {
                                resetItemCart(item, item.quantity);
                              }}
                              color={"#704fc8"}
                              w={"30px"}
                              h={"30px"}
                              minW={0}
                              lineHeight={0}
                              _hover={{
                                bg: "#704fc8",
                                color: "white",
                              }}
                              borderRadius={"50%"}
                              p={0}
                              mx={1}
                            >
                              <Icon
                                color="current"
                                as={RiDeleteBin6Line}
                                h={5}
                                w={5}
                                alignSelf={"center"}
                              />
                            </Button>
                          </Tooltip>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex justifyContent={"flex-end"} my={5}>
              <Flex
                minW={"fit-content"}
                mx={5}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Box>
                  <Button
                    onClick={() => deleteCart(cartItem)}
                    h={"auto"}
                    display={"block"}
                    mx={"auto"}
                    bg="transparent"
                    color={"blue"}
                    textDecor={"underline"}
                    fontSize={"1em"}
                    alignItems={"center"}
                    _hover={{
                      color: "#da5151",
                    }}
                    _focus={{
                      color: "#da5151",
                    }}
                    _active={{
                      color: "#da5151",
                    }}
                  >
                    <Text fontSize={"sm"} fontWeight={"normal"}>
                      Empty Cart
                    </Text>
                  </Button>
                </Box>
                <Box
                  borderRadius={"5px"}
                  py={2}
                  px={5}
                  border={"solid 2px #9066ff24"}
                  textAlign={"right"}
                  minW={"40px"}
                  ml={"5px"}
                  fontWeight={"normal"}
                >
                  <span>Cart Total: $</span>
                  <span>{globalTotal.toFixed(2)}</span>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box w={"700px"} p="6">
            <Box
              p="8"
              border={"1px solid #ebebeb"}
              height={"100%"}
              borderRadius="5"
              w={"100%"}
            >
              <Box>
                <Form cartItem={cartItem}/>
              </Box>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex h={"600px"} justifyContent={"center"} alignItems={"start"}>
          <Box mt={"30px"}>
            <Image src="../public/images/empty-cart.png"></Image>
            <Link to="/">
              <Button
                display={"block"}
                mx={"auto"}
                bg="#9066ff"
                placement={"top"}
                color={"white"}
                fontSize={"1.2em"}
                alignItems={"center"}
                flexGrow={2}
                _hover={{
                  bg: "#704fc8",
                }}
              >
                <Text fontSize={"md"}>Let's add some items!!!</Text>
              </Button>
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Cart;
