var React = require('react');
var PropTypes = React.PropTypes;
const GetCity = require('../components/GetCity');
const getForcast = require('../utils/openWetherHelpers').getForcast;

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    propTypes: {
        direction: PropTypes.string
    },
    getDefaultProps: function() {
        return {direction: 'column'}
    },
    getInitialState: function() {
        return {city: ''};
    },
    handleCityChange: function(e) {
        this.setState({city: e.target.value});
    },
    handleCitySubmit: function() {
      e.preventDefault()
        //getForcast(this.state.city);
        this.context.router.push('/forecast/' + this.state.city);
    },
    render: function() {
        return (<GetCity direction={this.props.direction} onUpdateCity={this.handleCityChange} onSubmitCity={this.handleCitySubmit} city={this.state.city}/>);
    }

});

module.exports = GetCityContainer;
