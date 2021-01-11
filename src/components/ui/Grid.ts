import styled from "@emotion/styled";

export const Container = styled("div")`
  width: 95%;
  margin: 0 auto;
`;
export const Grid = styled.div<{ $modal: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: ${({ $modal }) => ($modal ? "hidden" : "")};
  /* position: relative; */
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 20vw 1fr;
    grid-auto-rows: auto auto;
    gap: 1rem;
    align-items: start;
  }
`;
export const ContentHeader = styled("header")`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

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

export const CenterBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
