import React from 'react'
import styles from "./Records.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Records = () => {
    const [data, setData] = useState([]);
  
    const loadData = async () => {
      const result = await axios.get("http://localhost:3001/admin");
      setData(result.data);
    };
    useEffect(() => {
      loadData();
    }, []);
  
    return (
      //
      <div class="container">
        
  
        
  
        <h1>Our Placement record</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
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
                    <td>{user.Company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
export default Records
