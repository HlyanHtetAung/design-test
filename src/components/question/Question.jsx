import React from "react";
import "./question.scss";

import { FaArrowsAlt } from "react-icons/fa";
import { BsEyeFill, BsTrashFill } from "react-icons/bs";

function Question({ title, active, Icon, bgColor }) {
  return (
    <div className={active ? "question_wrapper active" : "question_wrapper"}>
      <FaArrowsAlt className="question_ArrowIcon" />
      <div className="question">
        <div className="question_top">
          <div className="questoin_topLeft">
            <p
              className="queston_topBtn"
              style={{ backgroundColor: `#${bgColor}` }}
            >
              #BSCS14
            </p>
            <Icon className="questionIcon" />
            <p>{title}</p>
          </div>
          <div className="question_topRight">
            <BsEyeFill className="eyeIcon" />
            <BsTrashFill className="trashIcon" />
          </div>
        </div>
        <div className="questionDetails_wrapper">
          <div className="questionDetails">
            <div className="questionDetail">
              <h4>Project:</h4>
              <p>ASPECT Project</p>
            </div>
            <div className="questionDetail">
              <h4>Topic:</h4>
              <p>Evolution & Natural Selection</p>
            </div>
            <div className="questionDetail">
              <h4>Key Ideas:</h4>
              <p>CE 5C/M1A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
