import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const initialState = {
  name: "",
  Company: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, Company } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name  || !Company) {
      alert("Please fill all the fields");
    } else {
        axios.post("http://localhost:3001/post", {
            name,
            Company,
        }).then(()=>{
            setState({name:"", Company:""});
        }).catch((err)=>{
            alert(err);
        }).then(()=>{
            alert("Data Added Successfully");
        });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]:value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Company
            </label>
            <input

                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Company"
                name="Company"
                value={Company}
                onChange={handleInputChange}
            />
           <input type="submit" className="btn btn-success my-3 mx-2" value="Submit" />
           <Link to="/admin">
            <input type="button" className="btn btn-warning" value="back" />
              </Link>
            </form>
            </div>
    
  );
};

export default AddEdit;
