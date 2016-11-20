var React = require('react');
var PropTypes = React.PropTypes;
const GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
    getDefaultProps: function() {
        return {direction: 'column'}
    },
    getInitialState: function() {
        return {city: ''};
    },
    propTypes: {
        direction: PropTypes.string
    },
    handleCityChange: function(event) {
        this.setState({city: e.target.value})
    },
    handleCitySubmit: function() {
        console.log(this.state.city)
    },
    render: function() {
        return (<GetCity direction={this.props.direction} onSubmitCity={this.handleCityChange} onUpdateCity={this.handleCitySubmit} city={this.state.city}/>);
    }

});

module.exports = GetCityContainer;
