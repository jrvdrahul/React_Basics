import React, { Component } from 'react';
import _ from 'lodash';


var stores = [
			 {
			    name:'Amazon',
			    
			   
			 },
			 {
			    name:'Shopify',
			    
			 },
			 {
			    name:'Woocommerce',
			    
			 },
			 {
			    name:'X-cart',
			    
			 },
			 {
			    name:'3dcart',
			    
			 },
			 {
			    name:'Skubana',
			    
			 }
			
 ]


class App extends Component {
	
	
		 
		 constructor(props){
			super(props);
			this.state={
				data:stores,
				isConnected:false,
				accName:''
			}
		}
		 
		 addAccounting() {

			if(this.state.isConnected){
				return(
					<div className="card accSoftware">
					{this.state.accName}
					<hr />
					<button onClick={this.accDelete.bind(this, this.state.accName)}>Disconnect</button>
					</div>
				)
			}
			
			return(
				<div className="add" onClick={this.add.bind(this)}>
					Add accounting
				</div>
			);
		}
		 
		 
		 
		add(){
			let name =prompt();
			console.log(name);
			if (name.length > 1) {
				this.setState({ accName:name})
				this.setState({ isConnected:true });
			}
			else{
				alert("enter accouting software name");
			}
		}
		 
		accDelete(name){
			alert(name);
			_.remove(this.state.accName, acc => acc.name === name);
			this.setState({ isConnected:false });
		}



		addChannel(){
			let name =prompt();
			let channel={
				name
			}
			console.log(name);
			if (name.length > 1) {
				
				let data=this.state.data;
					data.push(channel)
				this.setState({ data});
			}
			else{
				alert("enter sales channel name");
			}
		}
				
		

		deletChannel(name){
			alert(name);
			_.remove(this.state.data, data => data.name === name);
			this.setState({ data :this.state.data});
		}
		  
    
	
  render() {
	  let lists=this.state.data;
    return (
      <div className="row">
	  
		  <div className="col-lg-3">
			<h4>Accouting</h4>
			<hr />
				{this.addAccounting()}
		  </div>
		  
		  <div className="col-lg-3">
		  <h4>Sales channel</h4>
			<hr />
			<div className="add" onClick={this.addChannel.bind(this)}>
					Add Channel
			</div>
			{lists.map((data, index) => <div key={index} className="liist">
					 {data.name}
					 <hr />
			<button onClick={this.deletChannel.bind(this, data.name)}> Disconnect</button>
					 </div>)}
					 
		  </div>
		  
		  <div className="col-lg-3">
		  <h4>Payment</h4>
			<hr />
			<div className="add">
					Add Payment
				</div>
		  </div>
		  
		  <div className="col-lg-2">
		  <h4>Shipping</h4>
			<hr />
			<div className="add">
					Add Shipping
				</div>
		  </div>
	  
      </div>
    );
  }
}

export default App;

