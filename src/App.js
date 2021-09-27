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
import EditCreateAd from "./pages/EditCreateAd";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDetails from "./pages/PetDetails";
import MyAds from "./pages/MyAds";
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
        <div>test</div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* tried this out to see if we can search input */}
          <Route exact path="/gallery">
            <Gallery />
          </Route>

          <Route exact path="/myads">
            <MyAds />
          </Route>

          <Route path="/edit-ad/:petId">
            <EditCreateAd />
          </Route>

          <Route exact path="/gallery/dog">
            <Gallery filter={"dog"} />
          </Route>

          <Route exact path="/gallery/cat">
            <Gallery filter={"cat"} />
          </Route>

          <Route exact path="/gallery/others">
            <Gallery filter={"others"} />
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

          <Route exact path="/pet/:id">
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
