import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { routes, onAuthChange } from '../imports/routes/routes';
import  '../imports/startup/simple-schema-configuration';
import {Session} from 'meteor/session';
import {Links } from '../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);

  const links = Links.find().fetch();
  console.log('links', links);
});


Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById("app"));
});
