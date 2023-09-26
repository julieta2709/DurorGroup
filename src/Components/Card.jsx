import React from 'react';
import { FaArrowsAlt, FaLightbulb, FaRegHandshake, FaMapMarkedAlt} from 'react-icons/fa';

const Card = ({ title, icon, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {icon && (
       <div style={{ marginBottom: '10px' }}>
       <FaArrowsAlt size={64} />
     </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;