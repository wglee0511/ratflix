import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import TvProgram from "./components/TvProgram";
import Search from "./components/Search";
import Home from "./components/Home";
import styled from "styled-components";
import MovieDetail from "./components/Detail/MovieDetail";
import TvDetail from "./components/Detail/TvDetail";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movie />
          </Route>
          <Route path="/tv">
            <TvProgram />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/tv/:id">
            <TvDetail />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
