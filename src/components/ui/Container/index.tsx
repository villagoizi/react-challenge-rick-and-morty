import React from "react";
import ContainerWrap from "./Container.styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <ContainerWrap>{children}</ContainerWrap>
);

export default Container;
