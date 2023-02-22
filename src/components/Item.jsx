import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdReadMore } from "react-icons/md";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const Item = ({ title, price, image, category, id }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="250"
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
    >
      <Flex
        overflow="hidden"
        h={200}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={image}
          alt={`Picture of Product Name`}
          roundedTop="lg"
          maxW={"80%"}
          maxH={"80%"}
        ></Image>
      </Flex>
      <Box p="6" pt={2}>
        <Flex
          alignItems="baseline"
          justifyContent={"space-between"}
          alignContent="center"
        >
          <Box d="flex" alignItems="baseline">
            <Badge
              rounded="5"
              py={1}
              px={2}
              fontSize="0.8em"
              colorScheme="blue"
              fontWeight="500"
              lineHeight={"100%"}
              mb={1}
            >
              {category}
            </Badge>
          </Box>
          <Link to={`/item/${id}`}>
            <Tooltip
              label="Ver detalles"
              placement={"top"}
              shouldWrapChildren
              hasArrow
              arrowSize={10}
              borderRadius={"5px"}
              bg={"white"}
              color={"black"}
            >
              <Icon
                color="black"
                as={MdReadMore}
                h={5}
                w={5}
                alignSelf={"center"}
                ms={1}
                display={"block"}
              />
            </Tooltip>
          </Link>
        </Flex>
        <Flex justifyContent="space-between" alignContent="center">
          <Box
            fontSize="lg"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="black"
            isTruncated
          >
            {title}
          </Box>
        </Flex>
        <Box fontSize="2xl" color={"black"}>
          $ {price}
        </Box>
        <Flex
          mt="4"
          width="100%"
          bg="#9066ff"
          borderRadius="6"
          alignItems={"center"}
        >
          <Button
            px={3}
            backgroundColor={"transparent"}
            minW={"27px"}
            flexGrow={1}
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
            px={3}
            backgroundColor={"transparent"}
            minW={"15px"}
            flexGrow={1}
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
