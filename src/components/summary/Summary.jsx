import React from "react";
import "./summary.scss";

function Summary({ title, Icon, actionTitle }) {
  return (
    <div className="summary_wrapper">
      <h4>{title}</h4>
      <div className="summary">
        <h4 className="summary_count">17</h4>
        <p>Elements</p>
      </div>
      <div className="summaryAction_wrapper">
        <Icon />
        <p>{actionTitle}</p>
      </div>
    </div>
  );
}

export default Summary;
