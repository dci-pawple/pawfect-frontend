import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

const theme =createTheme({
palette: {
    primary: {
      light: '#ff9e9a',
      main: '#f76c6c',
      dark: '#bf3a41',
      contrastText: '#fff',
    },
     secondary: {
      light: '#464646',
      main: '#1f1f1f',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
})


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
         <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
