import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const Records = () => {
    const [data, setData] = useState([]);
  
    const loadData = async () => {
      const result = await axios.get("http://localhost:3001/");
      setData(result.data);
    };
    useEffect(() => {
      loadData();
    }, []);
  
    return (
      <div className="container">
        <h1>Our Placement record</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
  
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                    <td>{user.company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
export default Records
