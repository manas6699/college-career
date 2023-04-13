import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const initialState = {
  name: "",
  Company: "",
  Salary: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, Company , Salary} = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name  || !Company || !Salary) {
      alert("Please fill all the fields");
    } else {
      if(!id) {

        axios.post("http://localhost:3001/post", {
            name,
            Company,
            Salary
        }).then(()=>{
            setState({name:"", Company:"", Salary:""});
        }).catch((err)=>{
            alert(err);
        }).then(()=>{
            alert("Data Added Successfully");
        });
      }

      
      else {
        axios.put(`http://localhost:3001/admin/update/${id}`, {
            name,
            Company,
            Salary
        }).then(()=>{
            setState({name:"", Company:"", Salary:""});
        }).catch((err)=>{
            alert(err);
        }).then(()=>{
            alert("Data Updated Successfully");
        });
      }
       
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]:value });
  };

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/admin/edit/${id}`).then((res) => {
        setState({ ...res.data[0] });
      });
    }
  }, [id]); 


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
                value={name || ""}
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
                value={Company || ""}
                onChange={handleInputChange}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Salary
            </label>

            
            <input

                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Salary"
                name="Salary"
                value={Salary || ""}
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
