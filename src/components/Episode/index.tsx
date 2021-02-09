import { FC } from "react";
import { Episode } from "../../graphql/types";
import Card from "../ui/Card";
import { ContainerCard } from "../ui/Card/Card.styles";

interface EpisodesProps {
  entities: Episode[];
  handleVisibilityModal: (visibility: boolean, id: string) => void;
}

const Episodes: FC<EpisodesProps> = ({ entities, handleVisibilityModal }) => {
  return (
    <ContainerCard>
      {entities.map((episode) => (
        <Card
          onClick={handleVisibilityModal.bind(null, true, episode.id as string)}
          key={episode.id as string}
          id={episode.id as string}
          title={episode.name as string}
          description={episode.episode as string}
        />
      ))}
    </ContainerCard>
  );
};

export default Episodes;
