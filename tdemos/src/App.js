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
				list : [
			              {
			              	node: "Node 1",
			              	jobName : "RDP 1",
			              	progress : 20,
			              	id : 1
			              },
			              {
			            	  node: "Node 2",
			                	jobName : "RDP 2",
			                	progress : 3,
			                	id : 2
			                }
			              ,
			              {
			            	  node: "Node 3",
			                	jobName : "RDP 3",
			                	progress : 20,
			                	id : 3
			                },
			                {
			              	  node: "Node 4",
			                  	jobName : "RDP 4",
			                  	progress : 20,
			                  	id : 4
			                  },
			                  {
			                	  node: "Node 4",
			                    	jobName : "RDP 4",
			                    	progress : 20,
			                    	id : 5
			                    }
			              ]
		}
		
		this.changeProgress = this.changeProgress(this);
	}
	
  componentDidMount()
  {
	  console.log(this)
	 // this.timerID = setInterval(() => this.changeProgress() , 1000);
  }
  
  componentWillUnmount()
  {
	  //clearInterval(this.timerID);
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
	  console.log("here ")
	  const newList = this.state.list.slice()
	  newList[0].progress = newList[0].progress + 1
	  this.setState({ list : newList })  
  }
}

export default App;
