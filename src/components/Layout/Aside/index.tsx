import React from "react";
import { Container, Title, ContentSearch } from "./styles";

const RecentSearch: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>Buscas recentes</Title>

      <ContentSearch>{children}</ContentSearch>
    </Container>
  );
};

export default RecentSearch;
