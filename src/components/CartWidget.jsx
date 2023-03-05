import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="nav-cart-icon">
      <Link to={"/cart"} >
        <Icon as={MdOutlineShoppingCart} />
        <div className="notification">1</div>
      </Link>
    </div>
  );
};

export default CartWidget;
