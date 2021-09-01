import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
