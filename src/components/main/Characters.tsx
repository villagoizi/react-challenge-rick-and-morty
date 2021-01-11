import { FC } from "react";
import { Character } from "../../graphql/types";
import CardDetails from "../Card";
import { ContainerCard } from "../ui/Card";

interface CharactersProps {
  data: Character[];
  showModal: (id: string) => void;
}

const Characters: FC<CharactersProps> = ({ data, showModal }) => {
  return (
    <ContainerCard>
      {data &&
        data.map((character) => (
          <CardDetails
            showModal={showModal}
            key={character.id as string}
            id={character.id as string}
            description={character.name as string}
            img={character.image as string}
          />
        ))}
    </ContainerCard>
  );
};

export default Characters;
