import React, { useEffect, useState } from "react";
import ServicesContainer from "../Components/ServicesContainer";
import cards from "../cards.json";


const Services = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = cards.filter((item) => item.categorie === "services");
    setItems(filteredItems);
  }, []);
  return (
    <div className="Services">
      <h2>Nuestros Servicios:</h2>
      <ServicesContainer items={items} />
    </div>
  );
};
export default Services;
