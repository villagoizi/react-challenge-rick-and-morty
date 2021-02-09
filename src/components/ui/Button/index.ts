import styled from "@emotion/styled";

export const Button = styled("a")`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: "Bree Serif", serif;
  color: #fff;
  display: inline-block;
  border-radius: 0.3rem;
  background-color: var(--terciary);
  cursor: pointer;
  @media screen and (min-width: 500px) {
    margin: 0 20px 0 20px;
  }
`;
