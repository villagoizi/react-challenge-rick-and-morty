import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ModalWrapper,
  TitleModal,
  ModalContainer,
  ButtonClose,
  Description,
  DataTitle,
  DataDescription,
  WrappedClose,
  ContainerCard,
} from "../ui/Modal";
import { CenterBox } from "../ui/Grid";
import { Button } from "../ui/Buttons";
import { Character, Location, QueryLocationArgs } from "../../graphql/types";
import { Spinner } from "../ui/Spinner";
import CardDetails from "../Card";

interface ModalLocationProps {
  id: string | null;
  closeModal: () => void;
}

interface QueryLocation {
  location: Location;
}

const ModalLocation: React.FC<ModalLocationProps> = ({ id, closeModal }) => {
  const { data, loading } = useQuery<QueryLocation, QueryLocationArgs>(
    GET_LOCATION,
    {
      variables: { id: id as string },
    }
  );
  if (!id) return null;

  return (
    <ModalContainer onClick={closeModal}>
      <ModalWrapper>
        {loading && !data && (
          <CenterBox>
            <Spinner />
          </CenterBox>
        )}
        {!loading && data ? (
          <>
            <ButtonClose onClick={closeModal}>&#10005;</ButtonClose>
            <TitleModal>{data?.location.name}</TitleModal>
            <Description>
              <div>
                <DataTitle>Type:</DataTitle>
                <DataDescription>
                  {data?.location.type ? data?.location.type : "unknown"}
                </DataDescription>
              </div>
              <div>
                <DataTitle>Dimension:</DataTitle>
                <DataDescription>{data?.location.dimension}</DataDescription>
              </div>
              <div>
                <DataTitle>Characters: </DataTitle>
              </div>
            </Description>
            <ContainerCard>
              {(data.location.residents as Array<Character>)
                .slice(0, 5)
                .map((character) => (
                  <CardDetails
                    key={character.id as string}
                    id={character.id as string}
                    description={character.name as string}
                    img={character.image as string}
                    $width={"8rem"}
                    $size={".7rem"}
                  />
                ))}
            </ContainerCard>
            <WrappedClose>
              <Button onClick={closeModal}>Close</Button>
            </WrappedClose>
          </>
        ) : null}
      </ModalWrapper>
    </ModalContainer>
  );
};

export default ModalLocation;

const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        image
        name
      }
    }
  }
`;
