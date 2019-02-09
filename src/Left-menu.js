import React, { Component } from 'react';
import Popup from './Popup';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
	
	constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }
  
  openPopup = () => {
    this.setState({
      isOpen: true
    });
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  }
	

	
  render() {
    return (
      <div className="">
        
		<div className="row common-menu">
			<div className="col-lg-1">
				Unify
			</div>
			<div className="col-lg-6">
			
			</div>
			<div className="col-lg-4 top-menu">
				
				<i class="fa fa-plus-circle" aria-hidden="true"></i>
				<Link to="/Settings"><i class="fa fa-gears" aria-hidden="true"></i></Link>
				<i class="fa fa-user-circle-o" aria-hidden="true" onClick={this.openPopup}></i>				
			</div>
		</div>
		
		<Popup show={this.state.isOpen} value="rahul"
          onClose={this.closePopup}>
          
        </Popup>
		
		<div className="col-lg-1 side">
			<ul>
				<li><Link to="/Dashboard">Home</Link></li>
				<li><Link to="/Analytics">Analytics</Link></li>
				<li><Link to="/Sales">Sales</Link></li>
				<li><Link to="/Inventory">Inventory</Link></li>
				<li><Link to="/Items">Items</Link></li>
				<li><Link to="/Connections">Connections</Link></li>
			</ul>
		</div>
		
      </div>
    );
  }
}

export default App;
