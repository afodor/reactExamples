import React, { Component } from 'react';
import './App.css';

import 'react-table/react-table.css'
import ReactTable from "react-table";

class App extends Component 
{
	// with help from https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c
  
	 constructor(props) {
        super(props);
        this.state = {count: 1};
        this.incrementCounter = this.addADollar.bind(this);
        this.randomCounter = this.runSlot.bind(this);
    }
    
    render() {
        return (
            <div>
            	<h1>Double of nothing</h1>
                <div>${this.state.count}</div>
                <input type='button' value='Add a Dollar' onClick={this.incrementCounter} />
                <input type='button' value='Double or nothing' onClick={this.randomCounter} />
            </div>
        );
    }
    
    addADollar()
    {
    	let aVal = this.state.count + 1
    	this.setState({count: aVal});  
    }

    runSlot() 
    {
    	let aVal = this.state.count * 2

    	if (Math.random() < 0.5)
    	{
    		aVal =0
    	}
        this.setState({count: aVal});    		

    }

}

export default App;
