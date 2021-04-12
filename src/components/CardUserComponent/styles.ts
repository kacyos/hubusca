import styled from "styled-components";

interface ITitleContentProps {
  imgWidth?: string;
  cardWidth?: string;
  cardHeight?: string;
  fontSizeName?: string;
  fontSizeInfo?: string;
}

export const Container = styled.div<ITitleContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 10px;
  border-radius: 4px;
  width: ${(props) => props.cardWidth};
  height: ${(props) => props.cardHeight};
  
`;

export const Image = styled.img<ITitleContentProps>`
  width: ${(props) => props.imgWidth};
  border-radius: 50%;
`;

export const UserInfo = styled.div<ITitleContentProps>`
  word-wrap: break-word;
  width: ${(props) => props.cardWidth};
  height: ${(props) => props.cardHeight};
  > p {
    text-align: center;
    font-size: ${(props) => props.fontSizeName};
  }
  > span {
    font-size: ${(props) => props.fontSizeInfo};
    display: inline-block;
    width: 100%;
    padding-top: 5px;
    text-align: center;
  }
`;
