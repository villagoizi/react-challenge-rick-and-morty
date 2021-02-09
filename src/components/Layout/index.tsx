import React from "react";
import Header from "../Header";
import Main from "../Main";
import Aside from "../Aside";
import Footer from "../Footer";
import { Grid } from "./Layout.styles";
import useQuerySearch from "../../hooks/useQuerySearch/index";
import { CtxModal, CtxState } from "../../context/modal/modalDuck";
import { switchEntitiesComponents } from "../SwitchMain";
import Loading from "../Loading/Loading";
import Error from "../ui/Error";

export default function Layout() {
  const {
    change,
    data,
    entity,
    error,
    loading,
    handleChangeEntity,
    handleSearchChange,
    handlePagination,
    resetAll,
  } = useQuerySearch();

  const ctx = React.useContext(CtxModal);
  const { visibility, selectIdEntity, handleVisibilityModal } = ctx as CtxState;
  const [ComponentEntity, ModalEntity] = switchEntitiesComponents(entity);
  let renderComponent = loading && <Loading />;
  let infoPagination;
  if (error) {
    renderComponent = (
      <Error
        msg={
          "Ops! There is an error, there is not match in search of " + entity
        }
      />
    );
  }
  if (data && data[entity].results.length > 0) {
    renderComponent = (
      <ComponentEntity
        entities={data![entity].results}
        handleVisibilityModal={handleVisibilityModal}
      />
    );
    infoPagination = data[entity].info;
  }

  return (
    <Grid $visibilityModal={visibility}>
      {visibility && (
        <ModalEntity
          id={selectIdEntity}
          handleVisibilityModal={handleVisibilityModal.bind(null, false)}
        />
      )}
      <Header
        resetAll={resetAll}
        change={change}
        handleSearchChange={handleSearchChange}
        title={entity}
      />
      <Aside handleChangeEntity={handleChangeEntity} entity={entity} />
      <Main infoPagination={infoPagination} handlePagination={handlePagination}>
        {renderComponent}
      </Main>
      <Footer />
    </Grid>
  );
}
