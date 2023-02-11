import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Button,
  Text,
} from "@chakra-ui/react";

const Item = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="300"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      boxShadow="md"
      transition="box-shadow 0.1s ease-in-out"
      cursor="pointer"
      _hover={{
        boxShadow:"xl"
      }}
    >
      <Box overflow="hidden" h={250}>
        <Image
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
          alt={`Picture of Product Name`}
          roundedTop="lg"
        ></Image>
      </Box>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge
            rounded="5"
            py={1}
            px={2}
            fontSize="0.8em"
            colorScheme="blue"
            fontWeight="500"
            lineHeight={"100%"}
            mb={5}
          >
            Categoria
          </Badge>
        </Box>
        <Flex justifyContent="space-between" alignContent="center">
          <Box
            fontSize="lg"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="black"
            isTruncated
          >
            Product Title Here
          </Box>
        </Flex>
        <Box fontSize="2xl" color={"black"}>
              $50
            </Box>
        <Flex mt="4" width="100%" bg="#9066ff" borderRadius="6" alignItems={"center"}>
          <Button
            backgroundColor={"transparent"}
            width={"15%"}
            lineHeight={0}
            _hover={{
              bg: "#704fc8",
            }}
          >
            -
          </Button>
          <Button
            bg={"transparent"}
            placement={"top"}
            color={"white"}
            fontSize={"1.2em"}
            d={"flex"}
            alignItems={"center"}
            w={"75%"}
            _hover={{
              bg: "#704fc8",
            }}
          >
            <Text me={1}>Add To Cart</Text>
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
            bg={"transparent"}
            w={"15%"}
            lineHeight={0}
            _hover={{
              bg: "#704fc8",
            }}
          >
            +
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Item;
