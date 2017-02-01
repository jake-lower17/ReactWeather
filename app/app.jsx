var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
import firebase, { firebaseRef } from 'app/firebase/';

firebaseRef.set({
  app: {
    name: 'Todo AppAAAA',
    version: '1.0.0',
  },
  isRunning: true,
  user: {
    name: 'Jake',
    age: 27,
  },
});

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
