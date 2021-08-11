import React from "react";
import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Movie from "./components/Movie";
import TvProgram from "./components/TvProgram";
import Search from "./components/Search";
import Home from "./components/Home";
import styled from "styled-components";
import MovieDetail from "./components/Detail/MovieDetail";
import TvDetail from "./components/Detail/TvDetail";
import MetaScript from "./components/MetaSctipt";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <MetaScript />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movie />
          </Route>
          <Route exact path="/tv">
            <TvProgram />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route path="/tv/:id">
            <TvDetail />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
