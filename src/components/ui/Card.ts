import styled from "@emotion/styled";

export const Card = styled.article<{ $width?: any }>`
  width: ${({ $width }) => ($width ? $width : "16rem")};
  overflow: hidden;
  border: 0.3rem solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 1rem auto;
  border-radius: 0.3rem;
  @media screen and (min-width: 768px) {
    /* margin: 0; */
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    padding: 10px;
    font-size: 1.5rem;
    font-family: var(--font-jock);
    color: var(--terciary);
  }
`;

export const CardContent = styled.div<{ $size?: any }>`
  height: 100%;
  width: 100%;
  font-size: ${({ $size }) => ($size ? $size : "1.4rem")};
  font-family: var(--font-bre);
  background-color: var(--bg-terciary);
  color: rgba(0, 0, 0, 0.92);
`;

export const ContainerCard = styled("section")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
`;
