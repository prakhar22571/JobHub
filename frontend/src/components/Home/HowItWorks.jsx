import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How <span className="jobhub">JobHub</span> Works?</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              {/* <p>
                Fill in your details, including your name, email, and password.
              </p> */}
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              {/* <p>
                 Log in to your account. Navigate to the "ALL JOBS" | "POST NEW JOB" section.
              </p> */}
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              {/* <p>
                 Click "Job Details", go through Job description, click "Apply Now", upload your resume, and submit your application. | "Enter all the required Job details and click "CREATE JOB"."
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
