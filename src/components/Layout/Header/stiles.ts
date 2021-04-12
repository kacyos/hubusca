import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.94);
  color: #fff;
  border-bottom: 1px solid #706c72;
  > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 90px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
`;
