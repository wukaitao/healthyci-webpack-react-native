import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,IndexRoute,Redirect,hashHistory,IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import MyHealthy from './components/MyHealthy.jsx';
import NotFound from './components/NotFound.jsx';
require('./assets/css/main.scss');

const store = configureStore();

const App = React.createClass({
	judgeLogin(nextState,replace,next){
		replace('/myhealthy');
		next();
	},
	render(){
		return(
			<Router history={hashHistory}>
				<Route path='/' component={Main}>
					<IndexRoute component={Login} onEnter={this.judgeLogin}/>
					<Route path='/login' component={Login} onEnter={this.judgeLogin}/>
					<Route path='/myhealthy' component={MyHealthy}/>
					<Route path='/404' component={NotFound}/>
					<Redirect from='*' to='/404'/>
				</Route>
			</Router>
		)
	}
});
ReactDom.render((
	<Provider store={store}>
		<App/>
	</Provider>
	),$('#app')[0]
);