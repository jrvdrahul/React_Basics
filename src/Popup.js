import React from 'react';
import { Link } from 'react-router-dom';

class Popup extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="popup-backdrop">
        <div className="popup">
		<div className="head">
			user profile
		</div>
		<div className="content">
			<ul>
				<li>Trial Account</li>
				<li><Link to={"/Subscription/"+"abcd"}>Subscription</Link></li>
				<li>Change Password</li>
				{this.props.value}
			</ul>
		</div>
          <button className="popup-close" onClick={this.props.onClose}>✖</button>
          
		  
        </div>
      </div>
    );
  }
}

export default Popup;