import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";

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
        <Route>
          <UserProfile path="/user/profile"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
