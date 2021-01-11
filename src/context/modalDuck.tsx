import { createContext, ReactNode, useState } from "react";
import {
  QueryCharacterArgs,
  QueryLocationArgs,
  QueryEpisodeArgs,
} from "../graphql/types";

type idArgs =
  | QueryCharacterArgs["id"]
  | QueryLocationArgs["id"]
  | QueryEpisodeArgs["id"];

export type CtxState = {
  select: idArgs | null;
  show: boolean;
  showModal: (id: string) => void;
  closeModal: () => void;
};
const initialState: { select: string | null; show: boolean } = {
  select: null,
  show: false,
};

export const CtxModal = createContext<CtxState | {}>({});

type ModalProviderProps = {
  children: ReactNode;
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const showModal = (id: idArgs) => {
    setState({ select: id, show: true });
  };

  const closeModal = () => {
    setState(initialState);
  };
  return (
    <CtxModal.Provider
      value={{ show: state.show, select: state.select, showModal, closeModal }}
    >
      {children}
    </CtxModal.Provider>
  );
};

export default ModalProvider;
