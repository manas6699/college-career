import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home/Home.css";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  // notice section

  const loadNotice = async () => {
    const result = await axios.get("http://localhost:3001/events");
    setNotice(result.data);
  };
  useEffect(() => {
    loadNotice();
  }, []);
  return (
    <>
    <h1 className="heading"
    style={{textAlign:"center" , width:"100%"}}
    >Events</h1>
   {
  notice.map((notice) => {
    return (
      <div className="container notice-container" key={notice.id}>
        <div className="notice-content">
          <h3 className="heading">{notice.heading}</h3>
          <p>{notice.body}</p>
          <img src={notice.image} alt="notice" className="notice-image"/>
        </div>
        <div className="notice-button-container">
          <button className="btn btn-primary notice-button">Enroll Now!</button>
        </div>
      </div>
    );
  })
}

    </>
  );
};

export default Notice;
