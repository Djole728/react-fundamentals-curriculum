const React = require('react');
const ReactDOM = require('react-dom');
var HelloWorld = require('./container/Main.js');
const routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));
