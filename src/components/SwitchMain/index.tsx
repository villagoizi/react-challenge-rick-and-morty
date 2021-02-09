import React from "react";
import Character from "../Character";
import ModalCharacter from "../Character/ModalCharacter";
import Location from "../Location";
import ModalLocation from "../Location/ModalLocation";
import Episode from "../Episode";
import ModalEpisode from "../Episode/ModalEpisode/ModalEpisode";
import { Entities, EnumEntities } from "../../hooks/useQuerySearch/types";

export const switchEntitiesComponents = (
  entity: Entities
): React.ComponentType<any>[] => {
  switch (entity) {
    case EnumEntities.CHARACTER:
      return [Character, ModalCharacter];
    case EnumEntities.LOCATION:
      return [Location, ModalLocation];
    case EnumEntities.EPISODE:
      return [Episode, ModalEpisode];
    default:
      return [Character, ModalCharacter];
  }
};
