import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Tracker } from "meteor/tracker";

import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import NotFound from "../imports/ui/NotFound";
import Login from "../imports/ui/Login";

const unauthanticatedPages = ["/", "/signup"];
const authenticatedpages = ["/links"];
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthanticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedpages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push("/links");
  }
  if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push("/");
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
