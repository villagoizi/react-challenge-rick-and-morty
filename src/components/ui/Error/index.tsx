import React from "react";
import { WrapperError } from "./Error.styles";

interface ErrorProps {
  msg?: string;
}
const Error: React.FC<React.PropsWithChildren<ErrorProps>> = ({
  children,
  msg,
}) => <WrapperError>{children || msg}</WrapperError>;

export default Error;
