var React = require('react');
var PropTypes = React.PropTypes;
const City = require('../components/City');

var CityContainer = React.createClass({
  render: function() {
    return (
      <City />
    );
  }

});

module.exports = CityContainer;
