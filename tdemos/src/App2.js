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
	}
	
  componentDidMount()
  {
  }
  
  componentWillUnmount()
  {
  }

  
  render() 
    {
    	if( this.state.result1 == null)
    	{
    		return (<div><h1>Biolock J simulation</h1><button>Click to launch</button></div> )
    	}
    
      return(
      <ReactTable 
      data={this.state.list}
      columns={this.state.columns}
     />)
  } 
}

export default App;
