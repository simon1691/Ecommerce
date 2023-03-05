import React from "react";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon
} from "@chakra-ui/react";
import { RiDeleteBin6Line, RiAddCircleLine, RiIndeterminateCircleLine
} from "react-icons/ri";

const Cart = () => {
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
      <Flex justifyContent={"space-between"}>
        <TableContainer w={"100%"} m={5} mr={0}>
          <Table  size='sm'>
            <Thead>
              <Tr>
                <Th pb={3}>Product Image</Th>
                <Th pb={3}>Product Name</Th>
                <Th pb={3}>Price P/U</Th>
                <Th pb={3}>Quantity</Th>
                <Th pb={3}>Total Price</Th>
                <Th pb={3} textAlign={"center"}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td textAlign={"center"}>
                  <Button
                  color={"#704fc8"}
                    w={"30px"}
                    h={"30px"}
                    minW={0}
                    lineHeight={0}
                    _hover={{
                      bg: "#704fc8",
                      color:"white"
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
                  <Button
                    color={"#704fc8"}
                    w={"30px"}
                    h={"30px"}
                    minW={0}
                    lineHeight={0}
                    _hover={{
                      bg: "#704fc8",
                      color:"white"
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
                  <Button
                  color={"#704fc8"}
                  w={"30px"}
                  h={"30px"}
                  minW={0}
                  lineHeight={0}
                  _hover={{
                    bg: "#704fc8",
                    color:"white"
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
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box p="6">
          <Box
            p="8"
            border={"1px solid #ebebeb"}
            height={"100%"}
            borderRadius="5"
            w={400}
          >
            <Box>
              <form>
                <FormControl isRequired mb={4}>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' />
                </FormControl>

                <FormControl isRequired mb={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' />
                  <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl isRequired mb={4}>
                  <FormLabel>Email address</FormLabel>
                  <Input type='email' />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl mb={4}>
                  <FormLabel>Phone</FormLabel>
                  <Input type='tel' />
                  <FormHelperText></FormHelperText>
                </FormControl>
                <Button type="submit"
                  bg="#9066ff"
                  placement={"top"}
                  color={"white"}
                  fontSize={"1.2em"}
                  alignItems={"center"}
                  _hover={{
                    bg: "#704fc8",
                  }}
                  mt={8} 
                >
                  <Text me={1}>Checkout Purchase</Text>
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
