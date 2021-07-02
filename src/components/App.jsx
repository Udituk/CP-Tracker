import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import AboutUs from "./Pages/AboutUs";
import Contests from "./Pages/Contests";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contests" exact component={Contests} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
