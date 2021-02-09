import styled from "@emotion/styled";

export const ModalContainer = styled.div<{ $show?: boolean }>`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  opacity: ${({ $show }) => ($show ? 0 : 1)};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  padding: 10px;
  text-align: center;
  transition: opacity 3s ease-in-out;
`;

export const ModalWrapper = styled("div")`
  width: 80vw;
  height: 80vh;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  z-index: 1;
  background-color: var(--secondary);
  display: block;
  text-align: center;
  align-items: center;
  position: relative;
  overflow-y: scroll;
`;

export const TitleModal = styled("h3")`
  text-align: center;
  font-size: 1.5rem;
  color: var(--terciary);
  font-family: var(--font-jock);
  text-transform: uppercase;
`;

export const Header = styled("div")`
  width: 100%;
  height: 100%;
`;

export const ButtonClose = styled("p")`
  font-size: 1rem;
  display: block;
  text-align: right;
  font-family: var(--font-jock);
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const Image = styled("img")`
  width: 100%;
  height: auto;
  max-width: 25vw;
  max-height: 30vh;
`;

export const Description = styled.div`
  text-align: left;
`;
const Word = styled.p`
  font-size: 1rem;
  display: inline-block;
`;

export const DescriptionTitle = styled(Word)`
  font-weight: bold;
  font-family: var(--font-bre);
`;

export const DescriptionContent = styled(Word)`
  font-weight: 200;
  padding-left: 5px;
`;

export const WrappedClose = styled.div`
  bottom: 0;
  left: 0;
  position: sticky;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 10px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
