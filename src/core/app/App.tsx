import React from "react";
import { CardList } from "../../components/cardList/cardList";
import { Header } from "../../components/header/header";
import { Form } from "../../components/form/Form";

export const App = () => {
  return (
    <>
      <Header></Header>
      <CardList></CardList>
      <Form />
    </>
  );
};
