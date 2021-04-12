import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Repository from "./pages/repos";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository/:name" component={Repository} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
