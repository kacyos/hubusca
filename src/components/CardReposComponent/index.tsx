import React from "react";
import { Container,ReposInfo } from "./styles";

interface ICardReposProps {
  name?: string;
  language?: string;
  description?: string;
  create?: string;
  push?: string;
  repoLink?: string;
  key: string;
}

const CardRepos: React.FC<ICardReposProps> = ({
  name,
  language,
  description,
  create,
  push,
  repoLink,
  key
}) => {
  return (
    <Container key={key}>
      <ReposInfo>        
       <a href={repoLink} target="_blank" rel="noreferrer" > {name}</a>
        <p><span>Descrição:</span> {description}</p>
        <p><span>Liguagem:</span> {language}</p>
        <p><span>Data de criação:</span> {create}</p>
        <p><span>Último push:</span> {push}</p>
      </ReposInfo>
    </Container>
  );
};

export default CardRepos;
