import React, { Component } from 'react';
import logo from './unify-logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
	
	login(event){
		event.preventDefault();
		let email=this.refs.email.value;
		let password=this.refs.password.value;
		
		
		if(!email || !password){
			alert('Please Fill Credential');
		}
		else{
			
			window.location.assign('/Dashboard');
		}
		
		
	}
	
	
	
  render() {
    return (
      <div className="col-md-5 login">

<form className="text-center border border-light p-5">

    <p className="h4 mb-4 login-image"><img src={logo}/></p>

   
    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" ref="email" />

    
    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" ref="password" />

    <div className="d-flex justify-content-around">
        <div>
           
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
           
            <a href="">Forgot password?</a>
        </div>
    </div>

    
    <button className="btn btn-info btn-block my-4" type="submit" onClick={this.login.bind(this)}>Sign in</button>

    
    <p>Not a member?
        <li><Link to="/Signup">Signup</Link></li>
    </p>

    
    <p>or sign in with:</p>

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

</form>

		
      </div>
    );
  }
}

export default App;
