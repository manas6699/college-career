import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './admin.css';

interface EventData {
    id?: number;
    heading: string;
    body: string;
    image: string;
}

interface Record {
    id: number;
    name: string;
    company: string;
    salary: string;
}

const initialState: EventData = {
    heading: "",
    body: "",
    image: "",
};

const Admin = () => {
    const [data, setData] = useState<Record[]>([]);
    const [eventData, setEventData] = useState<EventData>(initialState);
    const [notice, setNotice] = useState<EventData[]>([]);

    const loadData = async () => {
        const result = await axios.get("http://localhost:3001/");
        setData(result.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadNotice = async () => {
        const result = await axios.get("http://localhost:3001/events");
        setNotice(result.data);
    };

    useEffect(() => {
        loadNotice();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!eventData.heading || !eventData.body || !eventData.image) {
            alert("Please fill all the fields");
        } else {
            axios.post("http://localhost:3001/postEvent", {
                heading: eventData.heading,
                body: eventData.body,
                image: eventData.image,
            })
                .then(() => {
                    setEventData(initialState);
                    alert("Event Added Successfully");
                    loadNotice(); // Refresh notice data after adding an event
                })
                .catch((err) => {
                    alert("Error: " + err);
                });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleDelete = (id: number, type: string) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                if (type === 'notice') {
                    loadNotice(); // Refresh notice data after deletion
                } else {
                    loadData(); // Refresh main data after deletion
                }
            })
            .catch((err) => {
                alert("Error: " + err);
            });
    };

    return (
        <div className="admin-container">
            <div className="centered">
                <h1 className="heading">Admin Panel</h1>
            </div>
            <div className="centered">
                <p>Notice Section</p>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter Event Title
                    </label>
                    <input
                        type="text"
                        className="form-control my-2"
                        name="heading"
                        value={eventData.heading}
                        onChange={handleChange}
                    />
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter Event Details
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="body"
                        value={eventData.body}
                        onChange={handleChange}
                    />
                    <label htmlFor="exampleFormControlInput1" className="form-label my-2">
                        Enter Image URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={eventData.image}
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-primary my-3"
                        type="submit"
                    >
                        Add Event
                    </button>
                </div>
            </form>
            <table className="table border shadow">
                <thead className="">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Body</th>
                        <th scope="col">Images</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notice.map((event, index) => (
                        <tr key={event.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{event.heading}</td>
                            <td>{event.body}</td>
                            <td>
                                <img src={event.image} alt="event" className="img-fluid" style={{ width: "100px" }} />
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(event.id!, 'notice')}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="add">
                <button type="button" className="btn btn-success my-3">
                    Add Field
                </button>
            </Link>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sl No.</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">CTC</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user.id}>
                            <td scope="row">{index + 1}</td>
                            <td scope="row">{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                            <td>{user.salary}</td>
                            <td>
                                <Link to={`/admin/edit/${user.id}`}>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger mx-3"
                                    onClick={() => handleDelete(user.id, 'data')}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
