import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Redirect from './pages/Redirect';
// import  from './pages/';

ReactDOM.render(
	<App />
	/*<Router>
		<div>
	      	<Route path="/" component={Layout}/>
	  		<Route path="/home" component={Home}/>
	  		<Route path="*" component={Redirect}/>
  		</div>
  	</Router>*/
	, document.getElementById('root'));
registerServiceWorker();
	
