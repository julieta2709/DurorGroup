import React, { useEffect, useState } from "react";
import WorkContainer from "../Components/WorkContainer";
import cards from "../cards.json";
import "../Styles/PagesStyles.css";

const Works = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = cards.filter((item) => item.categorie === "works");
    setItems(filteredItems);
  }, []);
  return (
    <div className="Works">
      <h2>Trabajos realizados:</h2>
      <WorkContainer items={items} />
    </div>
  );
};
export default Works;
