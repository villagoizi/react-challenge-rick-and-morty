import { createContext, ReactNode, useState, useCallback } from "react";
import {
  QueryCharacterArgs,
  QueryLocationArgs,
  QueryEpisodeArgs,
} from "../../graphql/types";

type idArgs =
  | QueryCharacterArgs["id"]
  | QueryLocationArgs["id"]
  | QueryEpisodeArgs["id"];
type ModalProviderProps = {
  children: ReactNode;
};

export type CtxState = {
  selectIdEntity: idArgs | null;
  visibility: boolean;
  handleVisibilityModal: (visibility: boolean, selectId?: string) => void;
};

export const CtxModal = createContext<CtxState | {}>({});

const initialState: { selectIdEntity: string | null; visibility: boolean } = {
  selectIdEntity: null,
  visibility: false,
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleVisibilityModal = useCallback(
    (visibility: boolean, selectId?: idArgs) =>
      setState({ selectIdEntity: selectId || null, visibility: visibility }),
    []
  );

  return (
    <CtxModal.Provider
      value={{
        visibility: state.visibility,
        selectIdEntity: state.selectIdEntity,
        handleVisibilityModal,
      }}
    >
      {children}
    </CtxModal.Provider>
  );
};

export default ModalProvider;
