import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import D from "../assets/D.png";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <>
      <div className={styles.wave}>
        <Wave

        
          fill="#77C9DB"
          paused={false}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.55,
            points: 8,
          }}

          
        />
       
        <footer className={styles.footer}>
          <div className={styles.waves}></div>
          <ul className={styles.socials}>
            <li className={styles.socialsli}>
              {" "}
              <a href="#"></a> {<FaFacebookF />}
            </li>
            <li className={styles.socialsli}>
              {" "}
              <a href="#"></a> {<BsGithub />}
            </li>
            <li className={styles.socialsli}>
              {" "}
              <a href="#"></a> {<BsInstagram />}
            </li>
            <li className={styles.socialsli}>
              {" "}
              <a href="#"></a> {<BsTwitter />}
            </li>
            <li className={styles.socialsli}>
              {" "}
              <a href="#"></a> {<BsLinkedin />}
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
