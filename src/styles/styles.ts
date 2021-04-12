import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 90px auto;

  grid-template-areas:
    "aside header"
    "aside body";

  height: 100vh;  
`;
