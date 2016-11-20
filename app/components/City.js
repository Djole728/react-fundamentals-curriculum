var React = require('react');
var PropTypes = React.PropTypes;

function City (props) {
  console.log(props)
  return props.loading === true ? <div>'loading'</div> : <div>'oj ha'</div>;
}

City.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = City;
