var React = require('react');
var PropTypes = React.PropTypes;

function Detail(props) {
  console.log(props.data);
  return (
   <div>
     vbfdasf
   </div>
 )
}

Detail.propTypes = {
   data: PropTypes.object.isRequired,
   city: PropTypes.string.isRequired
}

module.exports = Detail;
