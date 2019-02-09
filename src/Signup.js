import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';
import { Link } from 'react-router-dom';


class App extends Component {
	
	
  render() {
    return (
      <div className="col-md-5">
        
		
<form className="text-center border border-light p-5">

    <p className="h4 mb-4">Sign up</p>

    <div className="form-row mb-4">
        <div className="col">
            
            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
            
            <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
        </div>
    </div>

 
    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />

    
    <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
    <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    
    <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
    <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
        Optional - for two step authentication
    </small>

   
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
        <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
    </div>

   
    <button className="btn btn-info my-4 btn-block" type="submit">Sign Up</button>

    
    <p>or sign up with:</p>

    <a type="button" className="light-blue-text mx-2">
        <i className="fa fa-facebook"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fa fa-twitter"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fa fa-linkedin"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fa fa-github"></i>
    </a>

	<br />
	Already have account <li><Link to="/">Sign In</Link></li>
	
    <hr />

	
    
    <p>By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a> and
        <a href="" target="_blank">terms of service</a>. </p>

</form>

		
      </div>
    );
  }
}

export default App;
