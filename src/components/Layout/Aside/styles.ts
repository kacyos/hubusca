import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: aside;
  background-color: rgba(0, 0, 0, 0.94);
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  direction: rtl;
  @media (max-width: 1024px) {
    position: sticky;
    width: auto;
  }
`;

export const Title = styled.h3`
  margin-top: 80px;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const ContentSearch = styled.div`
  position: relative;
`;
