import React, { useState, useEffect, useMemo } from "react";

const CartContext = React.createContext();

export function CartProvider(props) {
  const [counter, setCounter] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => counter < 0 ? setCounter(0) : setCounter(counter - 1);

  const addItemToCart = (producto) => {
    increaseCounter();
    // esto va a buscar si el id del objeto item
    //dentro del array cartItmen es igual al id del objeto producto

    if (cartItem.find((item) => item.id === producto.id)) {
      // si es verdadero necesito crear una variable nueva para que guarde
      // el valor del nuevo array con el valor del objecto que agregue pero
      // aumentando el valor de la cantidad

      const productosRepetidos = cartItem.map((item) =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return setCartItem([...productosRepetidos]);
    }

    setCartItem([...cartItem, { ...producto, quantity: 1 }]);
  };

  const removeItemCart = (producto) => {
    decreaseCounter();
    if (cartItem.find((item) => item.id === producto.id)) {
      const productosRepetidos = cartItem
        .map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      setCartItem([...productosRepetidos]);
    }
  };

  const resetItemCart = (producto, productoQuantity) => {
    const productosRepetidos = cartItem.filter(
      (item) => item.id !== producto.id
    );
    let newCounter = counter - productoQuantity;
    setCounter(newCounter);

    setCartItem([...productosRepetidos]);
  };

  const value = useMemo(() => {
    return {
      counter,
      cartItem,
      setCartItem,
      setCounter,
      addItemToCart,
      removeItemCart,
      resetItemCart,
    };
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
    localStorage.setItem("counter", counter);
  }, [cartItem]);

  return <CartContext.Provider value={value} {...props} />;
}

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartContext debe estar dentro del proveedor CartContext"
    );
  }

  return context;
}
