import { FC } from "react";
import { Episode } from "../../graphql/types";
import CardDetails from "../Card";
import { ContainerCard } from "../ui/Card";

interface EpisodesProps {
  data: Episode[];
  showModal: (id: string) => void;
}

const Episodes: FC<EpisodesProps> = ({ data, showModal }) => {
  return (
    <ContainerCard>
      {data &&
        data.map((episode) => (
          <CardDetails
            showModal={showModal}
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
