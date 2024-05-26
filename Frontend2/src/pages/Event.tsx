import React, { useState, useEffect } from "react";
import axios from "axios";
import './event.css';

interface NoticeType {
    id: number;
    heading: string;
    body: string;
    image: string;
}

const Event: React.FC = () => {
    const [notice, setNotice] = useState<NoticeType[]>([]);

    const loadNotice = async () => {
        try {
            const result = await axios.get("http://localhost:3001/events");
            setNotice(result.data);
        } catch (error) {
            console.error("Error fetching notices:", error);
        }
    };

    useEffect(() => {
        loadNotice();
    }, []);

    return (
        <>
            <h1 className="heading" style={{ textAlign: "center", width: "100%" }}>
                Events
            </h1>
            {notice.map((noticeItem) => (
                <div className="container notice-container" key={noticeItem.id}>
                    <div className="notice-content">
                        <h3 className="heading">{noticeItem.heading}</h3>
                        <p>{noticeItem.body}</p>
                        <img src={noticeItem.image} alt="notice" className="notice-image" />
                    </div>
                    <div className="button-btn">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </div>
            ))}


        </>
    );
};

export default Event;
