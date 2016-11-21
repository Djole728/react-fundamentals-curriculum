var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../container/MainContainer');
var Home = require('../container/HomeContainer');
var CityContainer = require('../container/CityContainer');
var DetailContainer = require('../container/DetailContainer');

var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='forecast/:city' component={CityContainer}></Route>
        <Route path='detail/:city' component={DetailContainer}></Route>
        {/*<Route path="forecast/:city" header="Player Two" component={PromptContainer}></Route>
          <Route path='battle' component={ConfirmBattleContainer}></Route>
        <Route path='results' component={ResultsContainer}></Route> */}
      </Route>
    </Router>
);

module.exports = routes;
