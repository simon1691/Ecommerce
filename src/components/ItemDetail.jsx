import React from "react";
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

const ItemDetail = ({
  title,
  price,
  image,
  category,
  id,
  description,
}) => {
  return (
    <Box
      key={`${id}`}
      bg={useColorModeValue("white", "gray.800")}
      maxW="1200px"
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
      <Flex>
        <Flex
          overflow="hidden"
          h={"600"}
          w={700}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            m={"auto"}
            maxW={500}
            maxH={450}
            src={image}
            alt={`Picture of Product Name`}
            roundedTop="lg"
          ></Image>
        </Flex>
        <Box p="6">
          <Flex
            p="8"
            border={"1px solid #ebebeb"}
            height={"100%"}
            borderRadius="5"
            w={350}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
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
              >
                {category}
              </Badge>
            </Box>
            <Box
              fontSize="3xl"
              fontWeight="bold"
              as="h1"
              lineHeight={"120%"}
              color="black"
              mb={"20px"}
            >
              {title}
            </Box>
            <Text
              fontSize="md"
              fontWeight="regular"
              as="p"
              lineHeight="tight"
              color="black"
            >
              {description}
            </Text>
            <Box fontSize="3xl" color={"black"}>
              $ {price}
            </Box>
            <Flex
              mt="4"
              width="100%"
              bg="#9066ff"
              borderRadius="6"
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Button
                color={"white"}
                px={3}
                backgroundColor={"transparent"}
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
                flexGrow={3}
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
                color={"white"}
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemDetail;
