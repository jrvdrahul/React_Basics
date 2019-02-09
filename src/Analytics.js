import React, { Component } from 'react';


class App extends Component {
	
	
	constructor(props) {
      super(props);
		
      this.state = {
         data: '',
		 data1:''
      }
      
	  
	  
	  function deposit(...money){
		  
		  
		  let balance =0;
		  for(let i=0;i<money.length;i++){
			  balance +=money[i];
		  }
		  return balance;
	  }
	  console.log(deposit(100,40,50,30));
	  
	  let addMoney=[50,10,15,20,5];
	  console.log(Math.min(...addMoney));
	  
	  
	  
	  
   };
	
	
  render() {
    return (
      <div className="home">
        
		
		
		
      </div>
    );
  }
}

export default App;
