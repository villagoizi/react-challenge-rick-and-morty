import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled("div")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 0.2rem solid var(--terciary);
  border-left: transparent;

  animation: ${spin} 1s linear infinite;
`;
