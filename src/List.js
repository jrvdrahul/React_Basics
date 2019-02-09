import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
	
	
  render() {
    return (
      <ul className="">
       {
         this.props.items.map(function(item ,index) {
           return <Link to={"/details/01/"+index}><div className="liist" data-category={item} key={index}>{item}</div></Link>
         })
        }
       </ul>
    );
  }
}

export default App;
