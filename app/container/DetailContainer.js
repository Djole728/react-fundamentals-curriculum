var React = require('react');
var PropTypes = React.PropTypes;
const Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Detail data={this.props.location.state.data} city={this.props.routeParams.city} />
    );
  }

});

module.exports = DetailContainer;
