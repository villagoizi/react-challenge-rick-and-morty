import React, { useState, useEffect, useCallback } from "react";
import { useQuery, DocumentNode } from "@apollo/client";
import {
  QueryCharactersArgs,
  QueryEpisodesArgs,
  QueryLocationsArgs,
} from "../../graphql/types";
import {
  Data,
  FiltersVariables,
  StateChange,
  Entities,
  EnumEntities,
} from "./types";
import { makeGenerateDinamicQueries } from "../../utils/adapters/adapter-generate-dinamic-queries";

const initialStateChange: StateChange = {
  search: "",
  filter: "name",
};
export default function useQuerySearch() {
  const [change, setChange] = useState<StateChange>(initialStateChange);
  const [entity, setEntity] = useState<Entities>(EnumEntities.CHARACTER);
  const initialInstanceDinamicQueries = makeGenerateDinamicQueries(
    EnumEntities.CHARACTER,
    initialStateChange.search,
    initialStateChange.filter,
    1
  );
  const [query, setQuery] = useState<DocumentNode>(
    initialInstanceDinamicQueries.handle()
  );
  const [variables, setVariables] = useState<FiltersVariables | {}>(
    initialInstanceDinamicQueries.makeVariables()
  );
  const [fetching, setFetching] = useState(false);
  const { data, loading, refetch, error } = useQuery<
    Data,
    QueryCharactersArgs | QueryEpisodesArgs | QueryLocationsArgs
  >(query, {
    variables,
    errorPolicy: "all",
  });

  const handleSearchChange = (key: string, value: string) => {
    setChange({ ...change, [key]: value });
    if (change.search.length >= 3) {
      searchItems();
    }
  };

  const searchItems = (newEntity?: Entities) => {
    const newInstanceDinamicQuery = makeGenerateDinamicQueries(
      newEntity || entity,
      change.search,
      change.filter,
      1
    );
    setQuery(newInstanceDinamicQuery.handle());
    setVariables(newInstanceDinamicQuery.makeVariables());
    handleFetching(true);
  };

  const handleFetching = useCallback(
    (value: boolean) => setFetching(value),
    []
  );

  const handleChangeEntity = useCallback((newEntity: Entities) => {
    setEntity(newEntity);
    searchItems(newEntity);
  }, []);

  const resetAll = () => {
    setChange(initialStateChange);
    setVariables(initialInstanceDinamicQueries.makeVariables());
    handleFetching(true);
  };
  const handlePagination = useCallback(
    (page: number | null | undefined) => refetch && page && refetch({ page }),
    []
  );

  useEffect(() => {
    let mount = true;
    if (fetching) {
      if (refetch) {
        if (mount) {
          refetch(variables);
          handleFetching(false);
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
    entity,
    change,
    data,
    loading,
    error,
    resetAll,
    handleSearchChange,
    handleChangeEntity,
    handlePagination,
  };
}
