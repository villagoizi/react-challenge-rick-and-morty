import { FC } from "react";
import { Location } from "../../graphql/types";
import CardDetails from "../Card";
import { ContainerCard } from "../ui/Card";

interface LocationsProps {
  data: Location[];
  showModal: (id: string) => void;
}

const Locations: FC<LocationsProps> = ({ data, showModal }) => {
  return (
    <ContainerCard>
      {data &&
        data.map((location) => (
          <CardDetails
            showModal={showModal}
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
