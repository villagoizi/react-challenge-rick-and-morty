import { FC } from "react";
import { ContentAside } from "./Aside.styles";
import { ContentRadioGroup, InputRadio } from "../ui/Form";
import { Entities, EnumEntities } from "../../hooks/useQuerySearch/types";

interface AsideProps {
  handleChangeEntity: (newEntity: Entities) => void;
  entity: Entities;
}

const Aside: FC<AsideProps> = ({ entity, handleChangeEntity }) => {
  return (
    <ContentAside>
      <ContentRadioGroup>
        <InputRadio
          type="radio"
          id="characters"
          name="characters"
          value="characters"
          checked={entity === EnumEntities.CHARACTER}
          onChange={handleChangeEntity.bind(null, EnumEntities.CHARACTER)}
        />
        <label htmlFor="characters">Character</label>
      </ContentRadioGroup>
      <ContentRadioGroup>
        <InputRadio
          type="radio"
          id="locations"
          name="locations"
          value="locations"
          checked={entity === EnumEntities.LOCATION}
          onChange={handleChangeEntity.bind(null, EnumEntities.LOCATION)}
        />
        <label htmlFor="locations">Location</label>
      </ContentRadioGroup>
      <ContentRadioGroup>
        <InputRadio
          type="radio"
          id="episode"
          name="episode"
          value="episodes"
          checked={entity === EnumEntities.EPISODE}
          onChange={handleChangeEntity.bind(null, EnumEntities.EPISODE)}
        />
        <label htmlFor="episode">Episode</label>
      </ContentRadioGroup>
    </ContentAside>
  );
};

export default Aside;
