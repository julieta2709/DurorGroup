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
  FaArrowsAlt,
  FaLightbulb,
  FaRegHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { GiBroom, GiBoxUnpacking, GiHandTruck } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

const Icons = ({ iconType }) => {
  let icon;
  switch (iconType) {
    case "Bolt":
      icon = <FaBolt />;
      break;
    case "Building":
      icon = <FaBuilding />;
      break;
    case "Warehouse":
      icon = <FaWarehouse />;
      break;
    case "BusinessTime":
      icon = <FaBusinessTime />;
      break;
    case "CarBattery":
      icon = <FaCarBattery />;
      break;
    case "ChargingStation":
      icon = <FaChargingStation />;
      break;
    case "Faucet":
      icon = <FaFaucet />;
      break;
    case "Hammer":
      icon = <FaHammer />;
      break;
    case "PaintRoller":
      icon = <FaPaintRoller />;
      break;
    case "PeopleCarry":
      icon = <FaPeopleCarry />;
      break;
    case "Plug":
      icon = <FaPlug />;
      break;
    case "Toolbox":
      icon = <FaToolbox />;
      break;
    case "Wrench":
      icon = <FaWrench />;
      break;
    case "Arrows":
      icon = <FaArrowsAlt />;
      break;
    case "Lightbulb":
      icon = <FaLightbulb />;
      break;
    case "Handshake":
      icon = <FaRegHandshake />;
      break;
    case "Map":
      icon = <FaMapMarkedAlt />;
      break;
    case "Broom":
      icon = <GiBroom />;
      break;
    case "BoxUnpacking":
      icon = <GiBoxUnpacking />;
      break;
    case "HandTruck":
      icon = <GiHandTruck />;
      break;
    case "AirConditioning":
      icon = <TbAirConditioning />;
      break;
    default:
      icon = null;
  }
  return icon;
};
export default Icons;
