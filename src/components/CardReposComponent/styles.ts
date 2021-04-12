import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 2px;

  width: ${(props) => props.title};
  
`;

export const ReposInfo = styled.div`
  border-top: 1px solid #ddd;
  margin: 5px auto;
  width: 60%;
  align-content: right;

  > p {
    text-align: center;
    font-size: 18px;
    padding: 5px;
    text-align: left;
  }
  > a {
    font-size: 40px;
    display: inline-block;
    width: 100%;
    padding-top: 5px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 2px #000;
    margin: 25px;

    &:visited{
      color: #7B68EE;
    }
  }
  > p > span {
    font-size: 18px;
    font-weight: 700;
    text-decoration: underline;
  }
  word-wrap: break-word;
`;
