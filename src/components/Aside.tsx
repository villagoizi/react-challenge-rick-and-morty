import { FC } from "react";
import { ContentAside } from "./ui/Grid";
import { ContentFilters, InputRadio } from "./ui/Aside";
import { TypesSwitch } from "../hooks/useQuerySearch";

interface AsideProps {
  switchTypes: (v: TypesSwitch) => void;
  type: TypesSwitch;
}

const Aside: FC<AsideProps> = ({ type, switchTypes }) => {
  return (
    <ContentAside>
      <ContentFilters>
        <InputRadio
          type="radio"
          id="characters"
          name="characters"
          value="characters"
          checked={type === "characters"}
          onChange={(e) => switchTypes("characters")}
        />
        <label htmlFor="characters">Character</label>
      </ContentFilters>
      <ContentFilters>
        <InputRadio
          type="radio"
          id="locations"
          name="locations"
          value="locations"
          checked={type === "locations"}
          onChange={(e) => switchTypes("locations")}
        />
        <label htmlFor="locations">Location</label>
      </ContentFilters>
      <ContentFilters>
        <InputRadio
          type="radio"
          checked={type === "episodes"}
          id="episode"
          name="episode"
          value="episodes"
          onChange={(e) => switchTypes("episodes")}
        />
        <label htmlFor="episode">Episode</label>
      </ContentFilters>
    </ContentAside>
  );
};

export default Aside;
