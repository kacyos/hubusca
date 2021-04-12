import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { Container, ContentHeader, ImgLogo, Title } from "./stiles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <ContentHeader>
          <ImgLogo src={logo} alt="Hubusca Logo" />
          <Title>Hubusca</Title>
        </ContentHeader>
      </Link>
    </Container>
  );
};

export default Header;
