var React = require('react');
var PropTypes = React.PropTypes;
const Home = require('../components/Home');

var HomeContainer = React.createClass({
  render: function() {
    return (
      <Home />
    );
  }

});

module.exports = HomeContainer;
