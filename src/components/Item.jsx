import React from "react";
import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";
import AddRemoveButtons from "./AddRemoveButtons";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
} from "@chakra-ui/react";

const Item = ({ producto }) => {
  const { title, id, price, image, category } = producto;
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
              label="See Details"
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
        <AddRemoveButtons producto={producto} />
      </Box>
    </Box>
  );
};

export default Item;
