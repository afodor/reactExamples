import React, { Component } from 'react';
import './App.css';

import 'react-table/react-table.css'
import ReactTable from "react-table";

class App extends Component 
{
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
				columns : [{
				    Header: 'node',
				    accessor: 'node'
				  },{
				    Header: 'jobName',
				    accessor: 'jobName' 
				  },
				  {
				    Header: 'progress',
				    accessor: 'progress' 
				  }  
				 ]
				,
				list : this.makeList(100)
		}
	}
	
  componentDidMount()
  {
	  console.log(this)
	  this.timerID = setInterval(() => this.changeProgress() , 100);
  }
  
  componentWillUnmount()
  {
	  clearInterval(this.timerID);
  }

  makeList( aLength ) 
  {
	  let aList = []
	  
	  for( let i=0; i < aLength; i++)
	  {
		  let aName = i.toString()
		  
		  if(aName.length == 1)
			  aName = "0" + aName;
		  
		  aList[i] =  {
              	  node: "Node " + aName,
                	jobName : "RDP " + aName,
                	progress : 0,
                	id :i
                }
	  }
	  
	  return aList;
  }
  
  render() 
    {
      return(
  	 <ReactTable 
      data={this.state.list}
      columns={this.state.columns}
     />)
  } 
  
  changeProgress()
  {
	  const position = Math.floor(Math.random() * this.state.list.length); 
	  const newList = this.state.list.slice()
	  newList[position].progress = newList[position].progress + Math.floor(Math.random() * 5)
	  
	  if(newList[position].progress > 100 ) 
		  newList[position].progress =100;
	  
	  this.setState({ list : newList })  
  }
}

export default App;
