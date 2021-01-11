import styled from "@emotion/styled";

export const Input = styled("input")`
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  width: 300px;
`;
export const FormGroup = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;
export const TitleSelected = styled("h3")`
  font-size: 2rem;
  text-align: left;
  padding-bottom: 1rem;
  font-family: "Bree Serif", serif;
  color: #358471;
`;
export const RadioGroup = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
