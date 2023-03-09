import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const categoriaFilter = productos.filter(
    (producto) => producto.category === id
  );

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
      if (productos) {
        setLoader(false);
      }
    });
  }, []);

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
          Loading Products...
        </Box>
      </Box>
    );
  }
  return (
    <Box maxW="100%">
      <Box
        maxW="1280px"
        my="5"
        mx="auto"
        display="flex"
        alignItems="center"
        className="container-nav"
        justifyContent="space-between"
        padding="10px"
        color="white"
      >
        {id ? (
          <ItemList productos={categoriaFilter} />
        ) : (
          <ItemList productos={productos} />
        )}
      </Box>
    </Box>
  );
};

export default ItemListContainer;
