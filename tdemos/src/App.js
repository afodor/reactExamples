import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-table/react-table.css'
import ReactTable from "react-table";

const columns = [{
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

const list = [
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
              ];


class App extends Component 
{

  render() 
    {
      return(
  	 <ReactTable 
      data={list}
      columns={columns}

     />)
  } 
}

export default App;
