import React from "react";
import { Button } from "../ui/Button";
import { RadioGroup } from "../ui/Form";
import { PageText } from "./Pagination.styles";

type Maybe<T> = T | null | undefined;

interface PaginationMainProps {
  handlePagination: (page: Maybe<number>) => void;
  pageNumberNext: Maybe<number>;
  pageNumberPrev: Maybe<number>;
  currentPage: number;
}

const PaginationMain: React.FC<PaginationMainProps> = ({
  handlePagination,
  pageNumberNext,
  pageNumberPrev,
  currentPage,
}) => {
  return (
    <RadioGroup>
      {pageNumberPrev && (
        <Button onClick={handlePagination.bind(null, pageNumberPrev)}>
          Back
        </Button>
      )}
      <PageText>{currentPage}</PageText>
      {pageNumberNext && (
        <Button onClick={handlePagination.bind(null, pageNumberNext)}>
          Next
        </Button>
      )}
    </RadioGroup>
  );
};

export default PaginationMain;
