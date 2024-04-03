import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [result,setresult]=useState([]);

  useEffect(() => {

    fetch(`https://data.covid19india.org/data.json`).then(
      Response=>Response.json()
    ).then(data => setresult(data.statewise))

  },[])
  return (
   <div>
    <center>
    <h3>INDIA COVID 19 RECORD ACCORDING TO THE STATES</h3>
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <th className='th dark'>state</th>
          <th>active</th>
          <th>confirmed</th>
          <th>deaths</th>
          <th>recovered</th>
          <th>lastupdatedtime</th>

        </tr>
      </thead>
      <tbody>
     
          {
            result.map(item =>{
              return(
                <tr>
                  <td>{item.state}</td>
                  <td>{item.active}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.deaths}</td>
                  <td>{item.recovered}</td>
                  <td>{item.lastupdatedtime}</td>
                  
                </tr>
              )
            })
          }
       

      </tbody>
    </table>
    

    </center>
   </div>
  );
}

export default App;
