import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import CartWidget from "./CartWidget.jsx";
import "./ComponentsCssStyles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box maxW="100%" bg="#9066ff">
      <Box
        maxW="1280px"
        mx="auto"
        bg="#9066ff"
        display="flex"
        alignItems="center"
        className="container-nav"
        justifyContent="space-between"
        padding="10px"
        color="white"
      >
        <div className="nav-logo">
          <div>
            <Link to="/">Brand</Link>
          </div>
        </div>
        <div className="container-nav-list">
          <List className="nav-list" display="flex">
            <ListItem
              _hover={{
                bg: "#6b41dba1",
                borderRadius: "10px",
                transform: "background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Link to={`/category/${"men's clothing"}`}>MEN'S CLOTHING</Link>
            </ListItem>
            <ListItem
              _hover={{
                bg: "#6b41dba1",
                borderRadius: "10px",
                transform: "background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Link to={`/category/${"women's clothing"}`}>
                WOMEN'S CLOTHING
              </Link>
            </ListItem>
            <ListItem
              _hover={{
                bg: "#6b41dba1",
                borderRadius: "10px",
                transform: "background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Link to={`/category/${"jewelery"}`}>JEWELERY</Link>
            </ListItem>
            <ListItem
              _hover={{
                bg: "#6b41dba1",
                borderRadius: "10px",
                transform: "background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Link to={`/category/${"electronics"}`}>ELECTRONICS</Link>
            </ListItem>
            <CartWidget stock={5} />
          </List>
        </div>
      </Box>
    </Box>
  );
};

export default NavBar;
