import styled from "@emotion/styled";

export const ContentAside = styled("aside")`
  grid-column: 1/2;
  grid-row: 2/3;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
