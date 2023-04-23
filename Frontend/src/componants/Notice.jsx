import React from "react";
import styles from "./Notice.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Home/Home.css";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  // notice section

  const loadNotice = async () => {
    const result = await axios.get("http://localhost:3001/admin/notice");
    setNotice(result.data);
  };
  useEffect(() => {
    loadNotice();
  }, []);
  return (
    <>
      <section id="notice" >
      <div className="bg">
        <div className="container">
          <div className="header my-2">Notice</div>
          {notice.map((user, index) => {
            return (
              
                <div class="accordion my-2" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header my-4" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            {user.heading}
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">{user.body}</div>
                        </div>
                        </div>
                </div>
                
              
            );
          })}

          <div className="centered">
            <button type="button" class="btn btn-success my-4">
              View All
            </button>
          </div>
          {/* <button type="button" class="btn btn-dark justify-content-center">View All</button> */}
        </div>
      </div>
      </section>
    </>
  );
};

export default Notice;
