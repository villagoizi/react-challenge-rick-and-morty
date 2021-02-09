import { FC } from "react";
import { Location } from "../../graphql/types";
import Card from "../ui/Card";
import { ContainerCard } from "../ui/Card/Card.styles";

interface LocationsProps {
  entities: Location[];
  handleVisibilityModal: (visibility: boolean, id: string) => void;
}

const Locations: FC<LocationsProps> = ({ entities, handleVisibilityModal }) => {
  return (
    <ContainerCard>
      {entities.map((location) => (
        <Card
          onClick={handleVisibilityModal.bind(
            null,
            true,
            location.id as string
          )}
          key={location.id as string}
          id={location.id as string}
          title={location.name as string}
          description={location.dimension as string}
        />
      ))}
    </ContainerCard>
  );
};

export default Locations;
