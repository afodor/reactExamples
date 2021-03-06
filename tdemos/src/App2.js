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
				aStatus : 'init',
				jobID: null,
				result1: null,
		
				columns : [{
				    Header: 'node',
				    accessor: 'node'
				  },{
				    Header: 'jobName',
				    accessor: 'jobName' 
				  },
				  {
				        Header: 'progress',
				        accessor: 'progress',
				        Cell: row => (
				          <div
				            style={{
				              width: '100%',
				              height: '100%',
				              backgroundColor: '#dadada',
				              borderRadius: '2px'
				            }}
				          >
				            <div
				              style={{
				                width: `${row.value}%`,
				                height: '100%',
				                backgroundColor: row.value > 66 ? '#85cc00'
				                  : row.value > 33 ? '#ffbf00'
				                  : '#ff2e00',
				                borderRadius: '2px',
				                transition: 'all .2s ease-out'
				              }}
				            />
				          </div>
				        )
				      }
				 ]
		}
		
		this.launchSimOnServer = this.launchSimOnServer.bind(this)
	}
	
  componentDidMount()
  {
  }
  
  componentWillUnmount()
  {
  }

	setStateID( id ) 
	{
		console.log(id)
		this.setState( { jobID : id })
		setInterval(() => this.updateProgress() , 1000);
	}
	
	setNewList(aList)
	{
		this.setState( { aStatus: "running", list : aList } )
	}

	launchSimOnServer() 
	{
		console.log("got button click")
		this.setState( { aStatus: "launching"})
		
		fetch("http://localhost:8080/ServletExamples/servlets/servlet/KickOffBiolockJSim").then( response => response.json()).then(response => this.setStateID(response.jobID))
	}
	
	updateProgress()
	{
		let aUrl = "http://127.0.0.1:8080/ServletExamples/servlets/servlet/GetStatusReport?JOB_ID=" + this.state.jobID
		console.log(aUrl)
		fetch(aUrl).then( response => response.json()).then(response => this.setNewList(response.NodeStats))

	}
  
  render() 
    {
    	if( this.state.aStatus=== "init")
    	{
    		return (<div><h1>Biolock J simulation</h1><button onClick={this.launchSimOnServer}>Click to launch</button></div> )
    	}
    	
    	if( this.state.aStatus=== "launching")
    	{
    		return (<div><h1>Launching  {this.state.jobID} </h1></div> )
    	}
    		
    
      return(
      <ReactTable 
      data={this.state.list}
      columns={this.state.columns}
     />)
  } 
}

export default App;
