import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const initialState = {
  name: "",
  Company: "",
  Salary: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data , setData ]= useState([]);
  const { name, company , salary} = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name  || !company || !salary) {
      alert("Please fill all the fields");
    } else {
        axios.post("http://localhost:3001/postaData", {
            name,
            company,
            salary
        }).then(()=>{
            setState({name:"", Company:"", Salary:""});
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

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/edit/${id}`).then((res) => {
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
                defaultValue={data.name}
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
                defaultValue={data.company}
                name="company"
                value={company || ""}
                onChange={handleInputChange}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Salary
            </label>

            
            <input

                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={data.salary}
                name="salary"
                value={salary || ""}
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
