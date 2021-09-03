import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

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
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
