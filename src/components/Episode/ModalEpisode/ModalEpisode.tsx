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
import { Character, Episode, QueryEpisodeArgs } from "../../../graphql/types";
import { Spinner } from "../../ui/Spinner";
import Card from "../../ui/Card";

interface ModalEpisodeProps {
  id: string | null;
  handleVisibilityModal: () => void;
}

interface QueryEpisode {
  episode: Episode;
}

const ModalEpisode: React.FC<ModalEpisodeProps> = ({
  id,
  handleVisibilityModal,
}) => {
  const { data, loading } = useQuery<QueryEpisode, QueryEpisodeArgs>(
    GET_EPISODE,
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
            <TitleModal>{data?.episode.name}</TitleModal>
            <Description>
              <div>
                <DescriptionTitle>Release Date:</DescriptionTitle>
                <DescriptionContent>
                  {data?.episode.air_date ? data?.episode.air_date : "unknown"}
                </DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Episode:</DescriptionTitle>
                <DescriptionContent>{data?.episode.episode}</DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Characters: </DescriptionTitle>
              </div>
            </Description>
            <ContainerCard>
              {(data.episode.characters as Array<Character>)
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

const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        image
        name
      }
    }
  }
`;

export default ModalEpisode;
