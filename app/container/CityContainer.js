var React = require('react');
var PropTypes = React.PropTypes;
const City = require('../components/City');
const getForcast = require('../utils/openWetherHelpers').getForcast;

var CityContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      weather: {}
    };
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    getForcast(city)
      .then(function (weather) {
        this.setState({
          isLoading: false,
          weather: weather
        });
      }.bind(this));
  },
  render: function() {
    return (
      <City city={this.props.routeParams.city} isLoading={this.state.isLoading} weather={this.state.weather} />
    );
  }

});

module.exports = CityContainer;
