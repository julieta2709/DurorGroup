import React from "react";
import {
  FaBolt,
  FaWarehouse,
  FaBuilding,
  FaBusinessTime,
  FaCarBattery,
  FaChargingStation,
  FaFaucet,
  FaHammer,
  FaPaintRoller,
  FaPeopleCarry,
  FaPlug,
  FaToolbox,
  FaWrench,
} from "react-icons/fa";
import { GiBroom, GiBoxUnpacking, GiHandTruck } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import "../Styles/CardServices.css";

const CardServices = ({ item, iconType }) => {
  let icon;
  switch (iconType) {
    case "Bolt":
      icon = <FaBolt className="CardService-icon" />;
      break;
    case "Building":
      icon = <FaBuilding className="CardService-icon" />;
      break;
    case "Warehouse":
      icon = <FaWarehouse className="CardService-icon" />;
      break;
    case "BusinessTime":
      icon = <FaBusinessTime className="CardService-icon" />;
      break;
    case "CarBattery":
      icon = <FaCarBattery className="CardService-icon" />;
      break;
    case "ChargingStation":
      icon = <FaChargingStation className="CardService-icon" />;
      break;
    case "Faucet":
      icon = <FaFaucet className="CardService-icon" />;
      break;
    case "PaintRoller":
      icon = <FaPaintRoller className="CardService-icon" />;
      break;
    case "PeopleCarry":
      icon = <FaPeopleCarry className="CardService-icon" />;
      break;
    case "Plug":
      icon = <FaPlug className="CardService-icon" />;
      break;
    case "Hammer":
      icon = <FaHammer className="CardService-icon" />;
      break;
    case "Toolbox":
      icon = <FaToolbox className="CardService-icon" />;
      break;
    case "Wrench":
      icon = <FaWrench className="CardService-icon" />;
      break;
    case "Broom":
      icon = <GiBroom className="CardService-icon" />;
      break;
    case "BoxUnpacking":
      icon = <GiBoxUnpacking className="CardService-icon" />;
      break;
    case "HandTruck":
      icon = <GiHandTruck className="CardService-icon" />;
      break;
    case "AirConditioning":
      icon = <TbAirConditioning className="CardService-icon" />;
      break;
    default:
      icon = null;
  }
  return (
    <div className="CardService-container">
      <div>{icon}</div>
      <h3 className="CardService-title">{item.title}</h3>
      <div className="CardService-content">
        <p className="CardService-description">{item.description}</p>
        <button className="CardService-button">Conozca más</button>
      </div>
    </div>
  );
};

export default CardServices;
