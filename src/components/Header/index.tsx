import React, { FC, useCallback } from "react";
import Container from "../ui-two/Container/Container";
import { ContentHeader, TitleSelected } from "./Header.styles";
import {
  FormGroup,
  RadioGroup,
  ContentRadioGroup,
  Input,
  InputRadio,
} from "../ui-two/Form";
import { Button } from "../ui-two/Button";
import { firstLetterToUppercase } from "../../utils/firstLetterToUppercase";
import { StateChange } from "../../hooks/useQuerySearch";

interface HeaderProps {
  change: StateChange;
  handleSearchChange: (key: string, value: string) => void;
  resetAll: () => void;
  title: string;
}

const Header: FC<HeaderProps> = ({
  title,
  change,
  handleSearchChange,
  resetAll,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleSearchChange(e.target.name, e.target.value),
    []
  );

  return (
    <ContentHeader>
      <Container>
        <TitleSelected>{firstLetterToUppercase(title)}</TitleSelected>
        <FormGroup>
          <Input
            value={change.search}
            onChange={handleChange}
            type="text"
            name="search"
            placeholder={`Search by ${change.filter}`}
          />
          <Button onClick={() => resetAll()}>Clear all</Button>
        </FormGroup>
        <RadioGroup>
          <ContentRadioGroup>
            <InputRadio
              checked={change.filter === "name"}
              onChange={handleChange}
              type="radio"
              id="name"
              name="filter"
              value="name"
            />
            <label htmlFor="name">Name</label>
          </ContentRadioGroup>
          <ContentRadioGroup>
            <InputRadio
              checked={change.filter === "type"}
              onChange={handleChange}
              type="radio"
              id="type"
              name="filter"
              value="type"
            />
            <label htmlFor="type">Type</label>
          </ContentRadioGroup>
        </RadioGroup>
      </Container>
    </ContentHeader>
  );
};

export default Header;
