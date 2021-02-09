import styled from "@emotion/styled";

export const ContentFooter = styled("footer")`
  position: sticky;
  bottom: 0;
  width: 100% !important;
  height: 60px;
  background-color: #02afc5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    margin-top: 6rem;
  }
`;

export const Author = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  font-family: var(--font-jock);
  color: var(--terciary);
`;
export const ContentSocial = styled.div`
  display: flex;
`;
