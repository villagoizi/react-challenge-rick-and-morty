import React, { FC } from "react";
import { ContentHeader, Container } from "./ui/Grid";
import { Input, FormGroup, TitleSelected, RadioGroup } from "./ui/Header";
import { Button } from "./ui/Buttons";
import { ContentFilters, InputRadio } from "./ui/Aside";
import { StateChange } from "../hooks/useQuerySearch";

interface HeaderProps {
  change: StateChange;
  onSearchHandle: (key: string, value: string) => void;
  resetAll: () => void;
  title: string;
}

const Header: FC<HeaderProps> = ({
  title,
  change,
  onSearchHandle,
  resetAll,
}) => {
  return (
    <ContentHeader>
      <Container>
        <TitleSelected>
          {title[0].toUpperCase() + title.substr(1, title.length)}
        </TitleSelected>
        <FormGroup>
          <Input
            value={change.search}
            onChange={(e) => onSearchHandle(e.target.name, e.target.value)}
            type="text"
            name="search"
            placeholder={`Search by ${change.filter}`}
          />
          <Button onClick={() => resetAll()}>Clear all</Button>
        </FormGroup>
        <RadioGroup>
          <ContentFilters>
            <InputRadio
              checked={change.filter === "name"}
              onChange={(e) => onSearchHandle("filter", e.target.value)}
              type="radio"
              id="name"
              name="name"
              value="name"
            />
            <label htmlFor="name">Name</label>
          </ContentFilters>
          <ContentFilters>
            <InputRadio
              checked={change.filter === "type"}
              onChange={(e) => onSearchHandle("filter", e.target.value)}
              type="radio"
              id="type"
              name="type"
              value="type"
            />
            <label htmlFor="type">Type</label>
          </ContentFilters>
        </RadioGroup>
      </Container>
    </ContentHeader>
  );
};

export default Header;
