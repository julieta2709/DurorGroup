import React, { useEffect, useState } from "react";
import ServicesContainer from "../Components/ServicesContainer";
import cards from "../cards.json";

const Services = ()=>{
    const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(cards);
      });
    });
    promesa.then((data) => {
      setItems(data);
    });
  }, []);
    return (
        <ServicesContainer items={items}/>
    )
}
export default Services;