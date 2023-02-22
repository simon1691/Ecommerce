import React from "react";
import { Box } from "@chakra-ui/react";
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
          <ul className="nav-list" display="flex">
            <li>
              <Link to={`/category/${"men's clothing"}`}>MEN'S CLOTHING</Link>
            </li>
            <li>
              <Link to={`/category/${"women's clothing"}`}>WOMEN'S CLOTHING</Link>
            </li>
            <li>
              <Link to={`/category/${"jewelery"}`}>JEWELERY</Link>
            </li>
            <li>
              <Link to={`/category/${"electronics"}`}>ELECTRONICS</Link>
            </li>
          </ul>
          <CartWidget stock={5} />
        </div>
      </Box>
    </Box>
  );
};

export default NavBar;
