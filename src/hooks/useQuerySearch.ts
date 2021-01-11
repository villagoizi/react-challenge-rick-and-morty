import React from "react";
import { useQuery, DocumentNode } from "@apollo/client";
import {
  Character,
  Info,
  Location,
  Episode,
  QueryCharactersArgs,
  QueryEpisodesArgs,
  QueryLocationsArgs,
} from "../graphql/types";
import getFilters from "../utils/getFilters";

interface FiltersVariables {
  page?: number;
  filter?: {
    name?: string;
    type?: string;
  };
}

type Data = {
  [key: string]: {
    info: Info;
    results: Character[] | Location[] | Episode[];
  };
};
export interface StateChange {
  search?: string;
  filter?: string;
}

export type TypesSwitch = "characters" | "locations" | "episodes";

export default function useSearch() {
  const [change, setChange] = React.useState<StateChange>({
    search: "",
    filter: "name",
  });
  const [type, setType] = React.useState<TypesSwitch>("characters");
  const instance = new getFilters(type, change.search, change.filter, 1);
  const [query, setQuery] = React.useState<DocumentNode>(instance.handle());
  const [variables, setVariables] = React.useState<FiltersVariables | {}>(
    instance.variables()
  );
  const [fetching, setFetching] = React.useState(false);
  const { data, loading, refetch, error } = useQuery<
    Data,
    QueryCharactersArgs | QueryEpisodesArgs | QueryLocationsArgs
  >(query, {
    variables,
    errorPolicy: "all",
  });

  const onSearchHandle = (key: string, value: string) => {
    setChange({ ...change, [key]: value });
    if ((change.search as string).length >= 3) {
      searchItems();
    }
  };

  const searchItems = (v?: TypesSwitch) => {
    const queryInt = new getFilters(
      v ? v : type,
      change.search,
      change.filter,
      1
    );
    setQuery(queryInt.handle());
    setVariables(queryInt.variables());
    setFetching(true);
  };

  const switchTypes = (v: TypesSwitch) => {
    setType(v);
    searchItems(v);
  };

  const resetAll = () => {
    setChange({ search: "", filter: "name" });
    setVariables(new getFilters(type, "", change.filter, 1).variables());
    setFetching(true);
  };
  const setPagination = (page: number | null | undefined) => {
    if (refetch) {
      if (page) {
        refetch({ page });
      }
      return;
    }
  };

  React.useEffect(() => {
    let mount = true;
    if (fetching) {
      if (refetch) {
        if (mount) {
          refetch(variables);
          setFetching(false);
          return;
        }
      }
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line
  }, [fetching]);
  return {
    onSearchHandle,
    change,
    resetAll,
    data,
    loading,
    setPagination,
    error,
    switchTypes,
    type,
  };
}
