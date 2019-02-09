import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Signup from './Signup';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Sales from './Sales';
import Inventory from './Inventory';
import Items from './Items';
import Connections from './Connections';
import Settings from './Settings';
import Subscription from './Subscription';


import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'




ReactDOM.render(<Router >
<div>
	
	<Route exact path="/" component={App}/>
	<Route path="/Signup" component={Signup}/>
	<Route path="/Dashboard" component={Dashboard}/>
	<Route path="/Analytics" component={Analytics}/>
	<Route path="/Sales" component={Sales}/>
	<Route path="/Inventory" component={Inventory}/>
	<Route path="/Items" component={Items}/>
	<Route path="/Connections" component={Connections}/>
	<Route path="/Settings" component={Settings}/>
	<Route path="/Subscription" component={Subscription}/>
</div>

</Router>
, document.getElementById('root'));
registerServiceWorker();
