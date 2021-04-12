import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 10px;

  > span {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 500;
    text-shadow: 2px 1px black;
  }

  .home {
    width: 100%;
    height: auto;
  }

  .home > button {
    background-color: transparent;
    transition: opacity 0.3s;
    border-radius: 7px;
    margin-left: 20px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ReposContainer = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
