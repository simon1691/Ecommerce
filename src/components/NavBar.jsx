import React from "react";
import { Box } from "@chakra-ui/react";
import CartWidget from "./CartWidget.jsx";
import "./ComponentsCssStyles/NavBar.css";

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
          <div>PetSon</div>
        </div>
        <div className="container-nav-list">
          <ul className="nav-list" display="flex">
            <li>
              <a href="#">Perros</a>
            </li>
            <li>
              <a href="#">Gatos</a>
            </li>
            <li>
              <a href="#">Otras Mascotas</a>
            </li>
          </ul>
          <CartWidget stock={5} />
        </div>
      </Box>
    </Box>
  );
};

export default NavBar;
