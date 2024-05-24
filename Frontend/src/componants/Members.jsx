import React from "react";
import styles from "./members.module.css";
import semo from "../assets/semo2.png";

const Members = () => {
  return (
    <>
      <div className="bg">
        <h1 className="header">Members</h1>
      </div>

      <div className="bg">
        <div className="container my-4">
          <div className="row centered">
            <div className="col">
              <div className={styles.card}>
              <div className="my-2">
              <img src={semo} alt="" />
              </div>
              <p className="my-2">Manas Baroi</p>
              <p className="my-2">manasbaroi6699@gmail.com</p>
              <p className="my-2">📞01234567890</p>
              </div>
            </div>
            <div className="col order-5">
            <div className={styles.card}>
            <div className="my-2">
              <img src={semo} alt="" />
              </div>
              <p className="my-2">Manas Baroi</p>
              <p className="my-2">manasbaroi6699@gmail.com</p>
              <p className="my-2">📞01234567890</p>
              </div>
            </div>
            <div className="col order-1">
            <div className={styles.card}>
            <div className="my-2">
              <img src={semo} alt="" />
              </div>
              <p className="my-2">Manas Baroi</p>
              <p className="my-2">manasbaroi6699@gmail.com</p>
              <p className="my-2">📞01234567890</p>
              </div>
            </div>
          </div>

          <p className="my-5">
            GCETT- Berhampore carries a legacy of 90 years as one of the premier
            institutes of India. The technology is continuously changing the
            world & it becomes a challenging task to cater the needs of the
            industry, but we are proud to say that GCETT-B has faced the
            challenge successfully. This is possible due to outstanding efforts
            of our faculty and of the bright students who are selected after a
            stringent process. Our alumni have achieved tremendous success in
            all spheres and this bears an eloquent testimony to our efforts. We
            take pride in cordially inviting you to participate in our endeavor
            and look forward to welcoming you to the recruitment process for our
            be loving students. Training and Placement Section (TPO),
            GCETT-Berhampore is responsible for conducting all training &
            placement related activities of the institute. The integral part of
            the TPO is a team of student coordinators from all courses of the
            college who work tirelessly to ensure that top notch opportunities
            are brought to the students & manages all interactions between the
            visiting companies and the colleges. It works round the clock to
            improve the placements and internships scenario of the college. TPO
            section try to give the best facilities and support possible to the
            recruiting companies. The details on facilities can be viewed here.
            For more queries contact us. TPO section is jointly working with
            other West Bengal govt colleges by conducting on-campus drive and
            pooled campus drive. Out TPO Students team will always help to the
            TPO section for arranging the hospitalities , travelling and other
            facilities provided to the visiting companies. A group of faculty
            members from various departments are working together for this TPO
            section. These tremendous effort by our students and faculty
            members, our students are achieving their goal. Non Placed students
            are continuously getting opportunities for the placement after
            completion of their course. TPO cell sent continuously mail to those
            students for any kind of placement notification and finally near
            about 100% students going to be placed.. Placed Students are
            notified through mail for experience candidate recruitment of
            IT/Software , Core & Other companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Members;
