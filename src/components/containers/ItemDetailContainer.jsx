import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("los productos no pudieron ser cargados");
      }
    };
    fetchProductos();
  }, []);

  const filterId = productos.filter((producto) => producto.id == id);

  return (
    <Flex justifyContent={"center"} mt={120}>
      {filterId.map((item) => {
        const { title, id, price, image, category, description } = item;

        return (
          <ItemDetail
            image={image}
            title={title}
            id={id}
            price={price}
            category={category}
            description={description}
          />
        );
      })}
    </Flex>
  );
};

export default ItemDetailContainer;
