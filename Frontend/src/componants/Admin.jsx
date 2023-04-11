import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useRoutes } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Admin = () => {
  const [data, setData] = useState([]);

  // const {route} = useRoutes();

  const location = useLocation()

  const loadData = async () => {
    console.log('handle route change here', location)

    const result = await axios.get("http://localhost:3001/admin");
    setData(result.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    //
    <div class="container">
      
      <Link to="add">
      <button

        type="button"
        class="btn btn-success my-3"
        
      >
        Add Field
      </button>
      </Link>

      <h1>Data View from Database</h1>
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

export default Admin;
