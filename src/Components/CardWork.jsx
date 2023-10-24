import React from "react";

const CardWork = ({item}) => {
  return (
<div className="CardWork">
      <div className="CardWork-container">
        <h3 className="CardWork-title">{item.title}</h3>
        <p className="CardWorkd-description">{item.description}</p>
      </div>
    </div>
  )
}

export default CardWork;
