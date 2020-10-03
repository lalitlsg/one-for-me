import React from "react";
import "./App.css";
import NavbarComponent from "./Components/Header/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Body/Home";
import Blogs from "./Components/Body/Blogs";
import Videos from "./Components/Body/Videos";
import About from "./Components/Body/About";
import { Container } from "react-bootstrap";
import Contact from "./Components/Body/Contact";

function App() {
  return (
    <Container className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
