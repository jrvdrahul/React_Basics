import React, { Component } from 'react';


class App extends Component {
	
	constructor(props){
			super(props);
			this.state={
				isAccConnected:true,
				order:false,
				automation:false,
			}
			let cars=['bmw','city','ferrari','porche',]
			let pizza="pizza";
			
			for(let car of cars){
				console.log(car);
			}
			
			for(let pizz of pizza){
				console.log(pizz);
			}
			
			for(let i=0;i<=cars.length;i++){
			console.log(cars[i]);
			}
	
		}
	
	setting =()=>{
		if(this.state.isAccConnected){
			return(
				<div className="col-md-3">
				<h3>Setting 1</h3>
					<ul>
						<li>One</li>
						<li>Two</li>
						{this.settingorder()}
						
					</ul>
				</div>
			)
		}
		
	}
	settingorder(){
		if(this.state.order){
			return(
			<li>Three</li>
			)
			
		}
	}
	
	
	changeshow(){
		this.setState({order:true})
	}
	changeshow1 =(value, cold= 10) =>{
		alert(value);
		alert(cold);
		this.setState({order:false})
	}
	
	
	
	
	
  render() {
    return (
      <div className="row">
	  {this.setting()}
		
		<div className="col-md-3">
		<h3>Setting 2</h3>
		<ul>
				<li>Four</li>
				<li>Five</li>
				<li>Six</li>
			</ul>
		</div>
		<div className="col-md-3">
		<h3>Setting 3</h3>
		<ul>
				<li>Seven</li>
				<li>Eight</li>
				<li>Nine</li>
			</ul>
		</div>
		<div className="col-md-3">
		<h3>Setting 4</h3>
		<ul>
				<li>Ten</li>
				<li>Eleven</li>
				<li>Twelve</li>
			</ul>
		</div>
		
		
		
		
		<button onClick={this.changeshow.bind(this)}>click</button>
		<button onClick={()=>this.changeshow1("abcd")}>click</button>
		<button onClick={()=>this.setState({background: 'red'})} style={this.state}>arrow function</button>
      </div>
    );
  }
}

export default App;
