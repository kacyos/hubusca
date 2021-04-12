import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 50vw;
  height: 30px;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 5px;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:focus {
    background-color: #fff;
    opacity: 1;
  }
`;

export const ButtonSearch = styled.button`
  margin-left: 10px;
  background-color: transparent;
  transition: opacity 0.3s;
  border-radius: 7px;

  &:hover {
    opacity: 0.8;
  }
`;
