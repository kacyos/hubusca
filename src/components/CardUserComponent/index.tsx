import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, UserInfo } from "./styles";

interface IcardProps {
  avatarImg?: string;
  altImg?: string;
  name?: string;
  login?: string;
  location?: string;
  publicRepos?: any;
  followers?: any;
  link: string ;
  imgWidth?: string;
  cardWidth?: string;
  cardHeight?: string;
  fontSizeName?: string;
  fontSizeInfo?: string;
}

const CardUser: React.FC<IcardProps> = ({
  avatarImg,
  altImg,
  name,
  login,
  location,
  publicRepos,
  followers,
  link,
  imgWidth,
  cardWidth,
  cardHeight,
  fontSizeName,
  fontSizeInfo,
}) => {
  return (
    <Container cardWidth={cardWidth} cardHeight={cardHeight} >
      <Link to={link}>
        <Image src={avatarImg} alt={altImg} imgWidth={imgWidth} />
      </Link>
      <UserInfo
        cardWidth={cardWidth}
        fontSizeName={fontSizeName}
        fontSizeInfo={fontSizeInfo}
      >
        <p>{name}</p>
        <span>Login: {login}</span>
        <span>{location ? `Local: ${location}` : null}</span>
        <span>
          {publicRepos ? `Repositórios públicos: ${publicRepos}` : null}
        </span>
        <span>{publicRepos ? `Seguidores: ${followers}` : null}</span>
      </UserInfo>
    </Container>
  );
};

export default CardUser;
