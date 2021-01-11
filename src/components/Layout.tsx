import React from "react";
import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import ModalCharacter from "./modal/ModalCharacter";
import ModalLocation from "./modal/ModalLocation";
import ModalEpisode from "./modal/ModalEpisode";
import { Grid } from "./ui/Grid";
import useQuerySearch, { TypesSwitch } from "../hooks/useQuerySearch";
import { CtxModal, CtxState } from "../context/modalDuck";

export default function Layout() {
  const {
    change,
    onSearchHandle,
    data,
    loading,
    error,
    resetAll,
    switchTypes,
    type,
    setPagination,
  } = useQuerySearch();

  const ctx = React.useContext(CtxModal);
  const { show, closeModal, select, showModal } = ctx as CtxState;

  return (
    <Grid $modal={show}>
      {show ? switchModal(type, select, closeModal) : null}
      <Header
        resetAll={resetAll}
        change={change}
        onSearchHandle={onSearchHandle}
        title={type}
      />
      <Aside switchTypes={switchTypes} type={type} />
      <Main
        data={data}
        loading={loading}
        error={error}
        type={type}
        setPagination={setPagination}
        showModal={showModal}
      />
      <Footer />
    </Grid>
  );
}

function switchModal(
  type: TypesSwitch,
  id: string | null,
  closeModal: () => void
) {
  switch (type) {
    case "characters":
      return <ModalCharacter id={id} closeModal={closeModal} />;
    case "locations":
      return <ModalLocation id={id} closeModal={closeModal} />;
    case "episodes":
      return <ModalEpisode id={id} closeModal={closeModal} />;
    default:
      return null;
  }
}
