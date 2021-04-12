import React from "react";

import Routes from "./routes";

import GlobalStyled from "./styles/GlobalStyled";
import { Grid } from "../src/styles/styles";

const App: React.FC = () => {
  return (
    <Grid>
      <GlobalStyled />
      <Routes />
    </Grid>
  );
};

export default App;
