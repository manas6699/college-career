import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Edit = () => {

    const [state, setState] = useState({
        name: "",
        company: "",
        salary: "",
    });
    const { id } = useParams();
    useEffect(() => {
        // Fetch data when the component mounts
        axios.get(`http://localhost:3001/${id}`)
            .then((res) => {
                setState({ ...res.data[0] });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleUpdate = () => {
        axios.put(`http://localhost:3001/edit/${id}`, state)
            .then((res) => {
                console.log('Update successful:', res.data);
                // redirect to /admin page
                window.location.href = '/admin';
            })
            .catch((error) => {
                console.error('Error updating record:', error);
            })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    return (

        <div className='canvas border shadow'
            style={{ marginTop: "10px" }}
        >
            <label className="form-label">
                Name
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={state.name}
                name="name"

                onChange={handleInputChange}
            />
            <label className="form-label">
                Company
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={state.company}
                name="company"
                onChange={handleInputChange}
            />
            <label className="form-label">
                Salary
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={state.salary}
                name="salary"
                onChange={handleInputChange}
            />
            <button className="btn btn-primary"
                onClick={handleUpdate}
                style={{ marginTop: "20px", marginBottom: "20px" }}
            >Update</button>
        </div>

    )
}

export default Edit