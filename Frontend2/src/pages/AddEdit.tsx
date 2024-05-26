import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface InitialState {
    name: string;
    company: string;
    salary: string;
}

const initialState: InitialState = {
    name: "",
    company: "",
    salary: "",
};

const AddEdit = () => {
    const [state, setState] = useState<InitialState>(initialState);
    const { name, company, salary } = state;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/edit/${id}`).then((res) => {
                setState({ ...res.data[0] });
            });
        }
    }, [id]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !company || !salary) {
            alert("Please fill all the fields");
        } else {
            axios.post("http://localhost:3001/postaData", { name, company, salary })
                .then(() => {
                    setState(initialState);
                    alert("Data Added Successfully");
                    window.location.href = "/admin";
                })
                .catch((err) => {
                    alert(err);
                });
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="my-4">
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={company}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input
                        type="text"
                        className="form-control"
                        id="salary"
                        name="salary"
                        value={salary}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-buttons">
                    <input type="submit" className="btn btn-success my-3 mx-2" value="Submit" />
                    <Link to="/admin">
                        <input type="button" className="btn btn-warning" value="Back" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddEdit;
