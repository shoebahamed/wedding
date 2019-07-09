import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Contact} from "./Contact";
import Rsvp from "./Rsvp";
import Events from "./Events";

import Gallery from "./Gallery";

import {NoMatch} from "./NoMatch";
import {Layout} from "./components/Layout";
import {NavigationBar} from "./components/NavigationBar";
import {Jumbotron} from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Jumbotron} />
          </Switch>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/events" component={Events} />
              <Route path="/rsvp" component={Rsvp} />
              <Route path="/gallery" component={Gallery} />

              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
