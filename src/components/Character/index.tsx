import { FC } from "react";
import { Character } from "../../graphql/types";
import Card from "../ui/Card";
import { ContainerCard } from "../ui/Card/Card.styles";

interface CharactersProps {
  entities: Character[];
  handleVisibilityModal: (visibility: boolean, id: string) => void;
}

const Characters: FC<CharactersProps> = ({
  entities,
  handleVisibilityModal,
}) => {
  return (
    <ContainerCard>
      {entities &&
        entities.map((character) => (
          <Card
            onClick={handleVisibilityModal.bind(
              null,
              true,
              character.id as string
            )}
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
