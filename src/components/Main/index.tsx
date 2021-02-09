import React, { FC } from "react";
import { ContentMain } from "./Main.styles";
import Pagination from "../Pagination";

interface MainProps {
  infoPagination: any;
  handlePagination: (page: number | null | undefined) => void;
  children: React.ReactNode;
}

const smoothTopScroll = (ref: any) =>
  window.scroll({ top: ref.current.offsetTop, left: 0, behavior: "smooth" });

const Main: FC<MainProps> = ({
  infoPagination,
  handlePagination,
  children,
}) => {
  const refContentMain = React.useRef(null);
  const makeUpTopMain = () => smoothTopScroll(refContentMain);

  const handleOnClickPagination = (page: number | null | undefined) => {
    handlePagination(page);
    makeUpTopMain();
  };
  let pageNumberPrev = infoPagination && infoPagination!.prev;
  let pageNumberNext = infoPagination && infoPagination!.next;
  let currentPage =
    (pageNumberPrev && pageNumberPrev + 1) ||
    (pageNumberNext && pageNumberNext - 1) ||
    1;
  return (
    <ContentMain ref={refContentMain}>
      {children}
      {infoPagination && (
        <Pagination
          pageNumberPrev={pageNumberPrev}
          pageNumberNext={pageNumberNext}
          currentPage={currentPage}
          handlePagination={handleOnClickPagination}
        />
      )}
    </ContentMain>
  );
};

export default Main;
