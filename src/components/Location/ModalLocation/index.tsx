import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ModalWrapper,
  TitleModal,
  ModalContainer,
  ButtonClose,
  Description,
  DescriptionTitle,
  DescriptionContent,
  WrappedClose,
  ContainerCard,
} from "../../ui/Modal";
import { Center } from "../../ui/Center";
import { Button } from "../../ui/Button";
import { Character, Location, QueryLocationArgs } from "../../../graphql/types";
import { Spinner } from "../../ui/Spinner";
import Card from "../../ui/Card";

interface ModalLocationProps {
  id: string | null;
  handleVisibilityModal: () => void;
}

interface QueryLocation {
  location: Location;
}

const ModalLocation: React.FC<ModalLocationProps> = ({
  id,
  handleVisibilityModal,
}) => {
  const { data, loading } = useQuery<QueryLocation, QueryLocationArgs>(
    GET_LOCATION,
    {
      variables: { id: id as string },
    }
  );
  if (!id) return null;

  return (
    <ModalContainer onClick={handleVisibilityModal}>
      <ModalWrapper>
        {loading && !data && (
          <Center>
            <Spinner />
          </Center>
        )}
        {!loading && data ? (
          <>
            <ButtonClose onClick={handleVisibilityModal}>&#10005;</ButtonClose>
            <TitleModal>{data?.location.name}</TitleModal>
            <Description>
              <div>
                <DescriptionTitle>Type:</DescriptionTitle>
                <DescriptionContent>
                  {data?.location.type ? data?.location.type : "unknown"}
                </DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Dimension:</DescriptionTitle>
                <DescriptionContent>
                  {data?.location.dimension}
                </DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Characters: </DescriptionTitle>
              </div>
            </Description>
            <ContainerCard>
              {(data.location.residents as Array<Character>)
                .slice(0, 5)
                .map((character) => (
                  <Card
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
              <Button onClick={handleVisibilityModal}>Close</Button>
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
