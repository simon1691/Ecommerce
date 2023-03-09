import React from "react";
import { useState, useEffect } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    firstName,
    lastName,
    email,
    phone,
  };
  const ordersCollection = collection(db, "order");

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired mb={4}>
        <FormLabel>First Name</FormLabel>
        <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" onChange={(e) => setLastName(e.target.value)} />
        <FormHelperText></FormHelperText>
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input type="tel" onChange={(e) => setPhone(e.target.value)} />
        <FormHelperText></FormHelperText>
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
        <Text me={1}>Checkout Purchase</Text>
      </Button>
      <Text>Your Purchase Order ID: {orderId}</Text>
    </form>
  );
};

export default Form;
