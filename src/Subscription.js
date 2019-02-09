import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
	
	
	constructor(props) {
      super(props);
		
      this.state = {
         data: '',
		 data1:''
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
	   //alert(e.target.value);
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
			   <input value = {this.state.data1} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4 style={{color:"red",backgroundColor: "blue"}}>{this.state.data},,{this.state.data1}</h4>
         </div>
      );
   }
}

export default App;
