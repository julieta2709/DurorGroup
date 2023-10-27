import React from "react";
import CardWork from "./CardWork";
import "../Styles/PagesStyles.css";

const WorkContainer = ({ items }) => {
  return (
    <div className="Work-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="WorkCard-container">
            <CardWork item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default WorkContainer;
