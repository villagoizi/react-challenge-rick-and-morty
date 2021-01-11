import React, { FC } from "react";
import { ContentMain } from "./ui/Grid";
import { Character, Location, Episode, Info } from "../graphql/types";
import { TypesSwitch } from "../hooks/useQuerySearch";
import { ApolloError } from "@apollo/client";
import Characters from "./main/Characters";
import Locations from "./main/Locations";
import Episodes from "./main/Episodes";
import { Button, Page } from "./ui/Buttons";
import { RadioGroup } from "./ui/Header";
import { Spinner, Center, Error } from "./ui/Spinner";

interface MainProps {
  data: Data | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  type: TypesSwitch;
  setPagination: (page: number | null | undefined) => void;
  showModal: (id: string) => void;
}

type Data = {
  [key: string]: {
    info: Info;
    results: Character[] | Location[] | Episode[];
  };
};

const topScroll = (ref: any) =>
  window.scroll({ top: ref.current.offsetTop, left: 0, behavior: "smooth" });

const Main: FC<MainProps> = ({
  data,
  type,
  loading,
  error,
  setPagination,
  showModal,
}) => {
  const topRef = React.useRef(null);
  const topGo = () => topScroll(topRef);
  if (loading) {
    return (
      <ContentMain>
        <Center>
          <Spinner />
        </Center>
      </ContentMain>
    );
  }

  if (error) {
    return (
      <ContentMain>
        <Error>
          Ops! There is an error, there is not match in search of {type}
        </Error>
      </ContentMain>
    );
  }

  const handleOnClickPagination = (page: number | null | undefined) => {
    setPagination(page);
    topGo();
  };

  return (
    <ContentMain ref={topRef}>
      {!loading &&
        data &&
        data[type] &&
        switchContent(type, data[type].results, { showModal })}
      {!loading && data && data[type] && (
        <RadioGroup>
          {data[type].info.prev && (
            <Button
              onClick={() => handleOnClickPagination(data[type].info.prev)}
            >
              Back
            </Button>
          )}
          <Page>
            {data[type].info.prev
              ? (data[type].info.prev as number) + 1
              : data[type].info.next
              ? (data[type].info.next as number) - 1
              : 1}
          </Page>
          {data[type].info.next && (
            <Button
              onClick={() => handleOnClickPagination(data[type].info.next)}
            >
              Next
            </Button>
          )}
        </RadioGroup>
      )}
    </ContentMain>
  );
};

function switchContent(
  type: TypesSwitch,
  data: Data[TypesSwitch]["results"],
  props?: any
) {
  switch (type) {
    case "characters":
      return <Characters data={data as Character[]} {...props} />;
    case "locations":
      return <Locations data={data as Location[]} {...props} />;
    case "episodes":
      return <Episodes data={data as Episode[]} {...props} />;
  }
}

export default Main;
