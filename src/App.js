import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

const App = () => {
  //need this to get search input
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  console.log(search);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* tried this out to see if we can search input */}
        <Route path="/gallery/">
          <Gallery search={search} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
