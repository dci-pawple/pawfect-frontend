import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/user/profile">
          <UserProfile/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
