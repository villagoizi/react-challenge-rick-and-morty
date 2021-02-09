import { Character, Episode, Location, Info } from "../../graphql/types";

export interface FiltersVariables {
  page?: number;
  filter?: {
    name?: string;
    type?: string;
  };
}

export type Data = {
  [key: string]: {
    info: Info;
    results: Character[] | Location[] | Episode[];
  };
};

export interface StateChange {
  search: string;
  filter: string;
}

export enum EnumEntities {
  CHARACTER = "characters",
  LOCATION = "locations",
  EPISODE = "episodes",
}

export type Entities = "characters" | "locations" | "episodes";
