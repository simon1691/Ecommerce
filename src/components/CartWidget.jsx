import React from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const CartWidget = () => {
  const { counter } = useCartContext();

  {
    if (counter < 1) {
      return (
        <Tooltip
          label="The cart is empty"
          placement={"top"}
          shouldWrapChildren
          hasArrow
          arrowSize={10}
          borderRadius={"5px"}
          bg={"white"}
          color={"black"}
        >
          <div className={"nav-cart-icon deactivated"}>
            <Link to={"/cart"}>
              <Icon as={MdOutlineShoppingCart} />
              <div className={"notification d-none"}>{counter}</div>
            </Link>
          </div>
        </Tooltip>
      );
    }
  }
  return (
    <div className={"nav-cart-icon"}>
      <Link to={"/cart"}>
        <Icon as={MdOutlineShoppingCart} />
        <div className={"notification"}>{counter}</div>
      </Link>
    </div>
  );
};

export default CartWidget;
