import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPn7-Ei1dq7Ek6rdBOkVOHmUbVO-ByLZc",
  authDomain: "simonecommerce.firebaseapp.com",
  projectId: "simonecommerce",
  storageBucket: "simonecommerce.appspot.com",
  messagingSenderId: "568966188692",
  appId: "1:568966188692:web:af0a08b9fb40fdae146e81",
  measurementId: "G-NM4J6NS7YN",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
