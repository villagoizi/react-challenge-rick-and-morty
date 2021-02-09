import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import Layout from "./components/Layout";
import ModalProvider from "./context/modal/modalDuck";

function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </ApolloProvider>
  );
}

export default App;
