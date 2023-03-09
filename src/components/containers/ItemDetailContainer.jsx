import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const oneProduct = doc(db, "productos", `${id}`);
    getDoc(oneProduct).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = [{ id: snapshot.id, ...snapshot.data() }];
        setProductos(docs);
      }
    });
  }, []);

  const filterId = productos.filter((producto) => producto.id === id);

  return (
    <Flex justifyContent={"center"} mt={120}>
      {filterId.map((producto) => {
        return <ItemDetail producto={producto} key={producto.id} />;
      })}
    </Flex>
  );
};

export default ItemDetailContainer;
