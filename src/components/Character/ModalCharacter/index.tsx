import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ModalWrapper,
  TitleModal,
  ModalContainer,
  ButtonClose,
  Image,
  Description,
  DescriptionTitle,
  DescriptionContent,
  WrappedClose,
} from "../../ui/Modal";
import { Center } from "../../ui/Center";
import { Button } from "../../ui/Button";
import { Character, QueryCharacterArgs } from "../../../graphql/types";
import { Spinner } from "../../ui/Spinner";

interface ModalCharacterProps {
  id: string | null;
  handleVisibilityModal: () => void;
}

interface QueryCharacter {
  character: Character;
}

const ModalCharacter: React.FC<ModalCharacterProps> = ({
  id,
  handleVisibilityModal,
}) => {
  const { data, loading } = useQuery<QueryCharacter, QueryCharacterArgs>(
    GET_CHARACTER,
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
            <Image
              src={data?.character.image as string}
              alt={data?.character.name as string}
            />
            <TitleModal>{data?.character.name}</TitleModal>
            <Description>
              <div>
                <DescriptionTitle>Type:</DescriptionTitle>
                <DescriptionContent>
                  {data?.character.type ? data?.character.type : "unknown"}
                </DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Gender:</DescriptionTitle>
                <DescriptionContent>
                  {data?.character.gender}
                </DescriptionContent>
              </div>
              <div>
                <DescriptionTitle>Species:</DescriptionTitle>
                <DescriptionContent>
                  {data?.character.species}
                </DescriptionContent>
              </div>
            </Description>
            <WrappedClose>
              <Button onClick={handleVisibilityModal}>Close</Button>
            </WrappedClose>
          </>
        ) : null}
      </ModalWrapper>
    </ModalContainer>
  );
};

export default ModalCharacter;

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      type
      gender
      species
      image
    }
  }
`;
