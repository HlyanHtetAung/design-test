import React from "react";
import "./testInfo.scss";
import Question from "../question/Question";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { FaDna, FaDog, FaBacteria } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import { GrSystem } from "react-icons/gr";
import { MdEmojiPeople } from "react-icons/md";

import Summary from "../summary/Summary";

function TestInfo() {
  const date = new Date();
  const parsedDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return (
    <div className="testInfo_wraper">
      <div className="testInfo_left">
        <div className="testInformation_wrapper">
          <h1>Test Information</h1>
          <div className="testInfo_statusWrapper">
            <div className="testInfo_statusLeft">
              <div className="status_cirlce"></div>
              <h3>Active</h3>
            </div>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="testName_wrapper">
          <h4 className="testName_header">Test Name</h4>
          <h4 className="testName_letter">
            Elementary School - Biology semester 1
          </h4>
        </div>

        <div className="questions_wrapper">
          <div className="questions_headerWrapper">
            <h4>Questions</h4>
            <div className="addQuestions_wrapper">
              <AiOutlinePlus className="plusIcon" />
              <h3>Add question</h3>
            </div>
          </div>
          <Question
            title="DNA & Molecules"
            Icon={FaDna}
            bgColor="7DA4F9"
            active
          />
          <Question
            title="Humans, dogs and trees"
            Icon={GiSittingDog}
            bgColor="F7DAA0"
          />
          <Question
            title="System and classifying"
            Icon={GrSystem}
            bgColor="EB8B9F"
          />
          <Question
            title="Bacterias & Viruses"
            Icon={FaBacteria}
            bgColor="CDA7ED"
          />
          <Question
            title="Important People"
            Icon={MdEmojiPeople}
            bgColor="EB8B9F"
          />
          <Question
            title="Bacterias & Viruses"
            Icon={FaBacteria}
            bgColor="F7DAA0"
          />
          <Question
            title="System and classifying"
            Icon={GrSystem}
            bgColor="EB8B9F"
          />
          <Question
            title="Important People"
            Icon={MdEmojiPeople}
            bgColor="F7DAA0"
          />
          <Question
            title="Humans, dogs and trees"
            Icon={FaDog}
            bgColor="7DA4F9"
          />
        </div>
      </div>
      <div className="testInfo_right">
        <h3>Test Summary</h3>
        <Summary
          Icon={AiOutlinePlus}
          title="Questions"
          actionTitle="Add question"
        />
        <Summary
          Icon={BsEyeFill}
          title="Questions"
          actionTitle="View results"
        />
        <div className="lastEdit_wrapper">
          <h4>Last Edit</h4>
          <p>{parsedDate} at 12:34PM</p>
        </div>
        <div className="testInfo_actions_wrapper">
          <h4>Actions</h4>
          <div className="testInfo_container">
            <div className="testInfo_action">
              <AiOutlineShareAlt className="testInfo_actionIcon" />
              <h4 className="testInfo_actionHeader">Share test</h4>
            </div>
            <div className="testInfo_action">
              <AiOutlineShareAlt className="testInfo_actionIcon" />
              <h4 className="testInfo_actionHeader">Print test</h4>
            </div>
            <div className="testInfo_action">
              <AiOutlineShareAlt className="testInfo_actionIcon" />
              <h4 className="testInfo_actionHeader">Duplicate</h4>
            </div>
          </div>
        </div>
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default TestInfo;
