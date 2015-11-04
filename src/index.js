const React = require('react');
const { render } = require('react-dom');
const ChatApp = require('./ChatApp');
require('./stylesheets/skeleton.css');
require('./stylesheets/normalize.css');

render(<ChatApp />, document.getElementById('content'));