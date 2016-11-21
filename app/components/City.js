var React = require('react');
var PropTypes = React.PropTypes;
// const Router = require('react-');
// const Link = Router.Link;
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer} onClick={props.onClickEvent}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

function ForecastUI (props) {
  console.log(props.weather);
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.weather.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} onClickEvent={props.onClickEvent.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function City(props) {
  return (
   <div>
     {
       props.isLoading === true
         ? <h1 style={styles.header}> Loading </h1>
       : <ForecastUI city={props.city} weather={props.weather} onClickEvent={props.onClickEvent} />
     }
   </div>
 )
}

City.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired
}

module.exports = City;
