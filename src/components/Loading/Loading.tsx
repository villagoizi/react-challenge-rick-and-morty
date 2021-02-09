import React from "react";
import { ContentMain } from "../Main/Main.styles";
import { Center } from "../ui/Center";
import { Spinner } from "../ui/Spinner";

const Loading = () => (
  <Center>
    <Spinner />
  </Center>
);

export default Loading;
