import React, { useState, useEffect } from "react";
import { Flex,Box } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "../Loader";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const oneProduct = doc(db, "productos", `${id}`);
    getDoc(oneProduct).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = [{ id: snapshot.id, ...snapshot.data() }];
        setProductos(docs);
      }
      setLoader(false);
    });
  }, []);

  const filterId = productos.filter((producto) => producto.id === id);

  if (loader) {
    return (
      <Box
        h={"100vh"}
        display="flex"
        alignItems="center"
        flexDir={"column"}
        justifyContent="center"
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
      >
        <Loader size="xl"></Loader>
        <Box as="h1" mt={3}>
          Cargando Productos...
        </Box>
      </Box>
    );
  }

  return (
    <Flex justifyContent={"center"} mt={120}>
      {filterId.map((producto) => {
        return <ItemDetail producto={producto} key={producto.id} />;
      })}
    </Flex>
  );
};

export default ItemDetailContainer;
