import React from "react";
import "../css/feature.css";

import { PiStudentFill } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";

function Feature() {
  return (
    <div className="container-sm feature">
      <h2 className="feature-heading">Our Services</h2>
      <h3 className="feature-sub-heading">
        We provide chaperwise lecture and notes for{" "}
        <span className="bold">BCA,MCA,BBA,MBA,D-PHARM,B-PHARM</span> stduents
        at chiefest price
      </h3>
      <div className="feature-container">
        <div className="feature-box">
          <PiStudentFill alt={"Icon"} className="feature-icon" />
          <h3 className="feature-title">Chaperwise Lectures</h3>
          <h4 className="feature-sub-title">
            Chapterwise Lectures Tailored to Your Syllabus for Targeted Learning
            and Success
          </h4>
        </div>

        <div className="feature-box">
          <CgNotes alt={"Icon"} className="feature-icon" />
          <h3 className="feature-title">Notes & Suggestion</h3>
          <h4 className="feature-sub-title">
            Comprehensive Notes and Expert Suggestion Aligned with Your Exam
            Patterns
          </h4>
        </div>
        <div className="feature-box">
          <AiOutlineGlobal alt={"Icon"} className="feature-icon" />
          <h3 className="feature-title">Community Support</h3>
          <h4 className="feature-sub-title">
            "Engage with Peers" Join Our Student Community for Support and
            Collaboration
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Feature;
