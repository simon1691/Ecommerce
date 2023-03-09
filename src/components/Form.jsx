import React from "react";
import { useState, useEffect } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Loader from "./Loader";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

const Form = ({ cartItem }) => {
  const [loader, setLoader] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("This field is requiered and can not be empty");
    //validations
    if (!firstName == "" && !lastName == "" && !email == "" && !phone == "") {
      const order = {
        firstName,
        lastName,
        email,
        phone,
        items: cartItem,
      };
      const db = getFirestore();
      const ordersCollection = collection(db, "order");
      setLoader(true);
      addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id);
        setLoader(false);
      });
      setError("");
    }
    setValidated("border-error");
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      {orderId && (
        <Box bg="#c8ff664d" borderRadius={"5px"} py={"10px"} px={"15px"} mb={"15px"}>
          <Text fontSize={"sm"} fontWeight={"normal"}>
            <Text fontWeight={"bold"} display={"inline"}>Purchase Order ID:</Text> {orderId}
          </Text>
        </Box>
      )}

      <FormControl isRequired mb={4}>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          className={!firstName == "" ? "border-good" : `${validated}`}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {!firstName && <FormHelperText color={"red"}>{error}</FormHelperText>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          className={!lastName == "" ? "border-good" : `${validated}`}
          onChange={(e) => setLastName(e.target.value)}
        />
        {!lastName && <FormHelperText color={"red"}>{error}</FormHelperText>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          className={!email == "" ? "border-good" : `${validated}`}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && (
          <FormHelperText>We'll never share your email.</FormHelperText>
        )}
        {!email && <FormHelperText color={"red"}>{error}</FormHelperText>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          className={!phone == "" ? "border-good" : `${validated}`}
          onChange={(e) => setPhone(e.target.value)}
        />
        {!phone && <FormHelperText color={"red"}>{error}</FormHelperText>}
      </FormControl>
      <Button
        type="submit"
        bg="#9066ff"
        placement={"top"}
        color={"white"}
        fontSize={"sm"}
        alignItems={"center"}
        _hover={{
          bg: "#704fc8",
        }}
        my={3}
      >
        <Text>Checkout Purchase</Text>
        <Text pl={2}>{loader && <Loader size={"sm"}></Loader>}</Text>
      </Button>
    </form>
  );
};

export default Form;
