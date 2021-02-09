import styled from "@emotion/styled";

export const ContentMain = styled("main")`
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 1rem;
  border-top: 0.4rem solid var(--bg-secondary);
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    border-left: 0.4rem solid var(--bg-secondary);
    border-top: none;
    margin-bottom: 6rem;
  }
`;
