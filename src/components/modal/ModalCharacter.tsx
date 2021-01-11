import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ModalWrapper,
  TitleModal,
  ModalContainer,
  ButtonClose,
  Image,
  Description,
  DataTitle,
  DataDescription,
  WrappedClose,
} from "../ui/Modal";
import { CenterBox } from "../ui/Grid";
import { Button } from "../ui/Buttons";
import { Character, QueryCharacterArgs } from "../../graphql/types";
import { Spinner } from "../ui/Spinner";

interface ModalCharacterProps {
  id: string | null;
  closeModal: () => void;
}

interface QueryCharacter {
  character: Character;
}

const ModalCharacter: React.FC<ModalCharacterProps> = ({ id, closeModal }) => {
  const { data, loading } = useQuery<QueryCharacter, QueryCharacterArgs>(
    GET_CHARACTER,
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
            <Image
              src={data?.character.image as string}
              alt={data?.character.name as string}
            />
            <TitleModal>{data?.character.name}</TitleModal>
            <Description>
              <div>
                <DataTitle>Type:</DataTitle>
                <DataDescription>
                  {data?.character.type ? data?.character.type : "unknown"}
                </DataDescription>
              </div>
              <div>
                <DataTitle>Gender:</DataTitle>
                <DataDescription>{data?.character.gender}</DataDescription>
              </div>
              <div>
                <DataTitle>Species:</DataTitle>
                <DataDescription>{data?.character.species}</DataDescription>
              </div>
            </Description>
            <WrappedClose>
              <Button onClick={closeModal}>Close</Button>
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
