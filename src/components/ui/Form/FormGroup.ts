import styled from "@emotion/styled";

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
