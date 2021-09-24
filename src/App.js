import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";
import Theme from "./style/theme/Theme";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CreateAd from "./pages/CreateAd";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDetails from "./pages/PetDetails";
import Chat from "./pages/Chat";
import SavedSearches from "./components/SavedSearches";

const App = () => {
  //need this to get search input
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  // console.log(search);

  return (
    <Theme>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* tried this out to see if we can search input */}
          <Route path="/gallery">
            <Gallery search={search} />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/createad">
            <CreateAd />
          </Route>
          <Route path="/user/profile">
            <UserProfile />
          </Route>

          <Route path="/messages">
            <Chat />
          </Route>

          {/* <Route path={`/pet/${pet._id}`}> */}
          <Route path="/pet">
            <PetDetails />
          </Route>

          <Route path="/save">
            <SavedSearches />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
