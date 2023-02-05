import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div className="nav-cart-icon">
      <Icon as={MdOutlineShoppingCart} />
      <div className="notification">1</div>
    </div>
  );
};

export default CartWidget;
