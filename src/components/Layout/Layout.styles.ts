import styled from "@emotion/styled";

export const Grid = styled.div<{ $visibilityModal: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: ${({ $visibilityModal }) => ($visibilityModal ? "hidden" : "")};
  /* position: relative; */
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 20vw 1fr;
    grid-auto-rows: auto auto;
    gap: 1rem;
    align-items: start;
  }
`;
