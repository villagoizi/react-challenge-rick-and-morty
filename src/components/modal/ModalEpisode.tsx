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
import { Character, Episode, QueryEpisodeArgs } from "../../graphql/types";
import { Spinner } from "../ui/Spinner";
import CardDetails from "../Card";

interface ModalEpisodeProps {
  id: string | null;
  closeModal: () => void;
}

interface QueryEpisode {
  episode: Episode;
}

const ModalEpisode: React.FC<ModalEpisodeProps> = ({ id, closeModal }) => {
  const { data, loading } = useQuery<QueryEpisode, QueryEpisodeArgs>(
    GET_EPISODE,
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
            <TitleModal>{data?.episode.name}</TitleModal>
            <Description>
              <div>
                <DataTitle>Release Date:</DataTitle>
                <DataDescription>
                  {data?.episode.air_date ? data?.episode.air_date : "unknown"}
                </DataDescription>
              </div>
              <div>
                <DataTitle>Episode:</DataTitle>
                <DataDescription>{data?.episode.episode}</DataDescription>
              </div>
              <div>
                <DataTitle>Characters: </DataTitle>
              </div>
            </Description>
            <ContainerCard>
              {(data.episode.characters as Array<Character>)
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
