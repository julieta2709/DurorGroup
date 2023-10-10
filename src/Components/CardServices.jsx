import React from "react";
import {
  FaBolt,
  FaBuilding,
  FaBusinessTime,
  FaCarBattery,
  FaChargingStation,
  FaFaucet,
  FaHammer,
  FaPaintRoller,
  FaPeopleCarry,
  FaPlug,
  FaSnowplow,
  FaToolbox,
  FaWrench,
} from "react-icons/fa";
import { GiBroom, GiBoxUnpacking, GiHandTruck } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

const CardServices = ({ title, iconType, description }) => {
  let icon;
  switch (iconType) {
    case "bolt":
      icon = <FaBolt className="Card-Icon" />;
      break;
    case "building":
      icon = <FaBuilding className="Card-Icon" />;
      break;
    case "businessTime":
      icon = <FaBusinessTime className="Card-Icon" />;
      break;
    case "carBattery":
      icon = <FaCarBattery className="Card-Icon" />;
      break;
    case "chargingStation":
      icon = <FaChargingStation className="Card-Icon" />;
      break;
      case "Faucet":
      icon = <FaFaucet className="Card-Icon" />;
      break;
      case "Hammer":
      icon = <FaHammer className="Card-Icon" />;
      break;
      case "PaintRoller":
      icon = <FaPaintRoller className="Card-Icon" />;
      break;
      case "PeopleCarry":
      icon = <FaPeopleCarry className="Card-Icon" />;
      break;
      case "Plug":
      icon = <FaPlug className="Card-Icon" />;
      break;
      case "Snowplow":
      icon = <FaSnowplow className="Card-Icon" />;
      break;
      case "Toolbox":
      icon = <FaToolbox className="Card-Icon" />;
      break;
      case "Wrench":
      icon = <FaWrench className="Card-Icon" />;
      break;
    default:
      icon = null;
  }
  return (
    <div className="Card-container">
      <div className="Card-content">
        {icon && <div>{icon}</div>}
        <h3 className="Card-title">{title}</h3>
        <p className="Card-description">{description}</p>
      </div>
    </div>
  )
};

export default CardServices;
