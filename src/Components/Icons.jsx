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
import "../Styles/Icons.css"
const Icons = (iconType) => {
  switch (iconType) {
    case "Bolt":
      return <FaBolt className={iconStyle} />;
    case "Building":
      return <FaBuilding className={iconStyle} />;
    case "Warehouse":
      return <FaWarehouse className={iconStyle} />;
    case "BusinessTime":
      return <FaBusinessTime className={iconStyle} />;
    case "CarBattery":
      return <FaCarBattery className={iconStyle} />;
    case "ChargingStation":
      return <FaChargingStation className={iconStyle} />;
    case "Faucet":
      return <FaFaucet className={iconStyle} />;
    case "Hammer":
      return <FaHammer className={iconStyle} />;
    case "PaintRoller":
      return <FaPaintRoller className={iconStyle} />;
    case "PeopleCarry":
      return <FaPeopleCarry className={iconStyle} />;
    case "Plug":
      return <FaPlug className={iconStyle} />;
    case "Toolbox":
      return <FaToolbox className={iconStyle} />;
    case "Wrench":
      return <FaWrench className={iconStyle} />;
    case "Arrows":
      return <FaArrowsAlt className={iconStyle} />;
    case "Lightbulb":
      return <FaLightbulb className={iconStyle} />;
    case "Handshake":
      return <FaRegHandshake className={iconStyle} />;
    case "Map":
      return <FaMapMarkedAlt className={iconStyle} />;
    case "Broom":
      return <GiBroom className={iconStyle} />;
    case "BoxUnpacking":
      return <GiBoxUnpacking className={iconStyle} />;
    case "HandTruck":
      return <GiHandTruck className={iconStyle} />;
    case "AirConditioning":
      return <TbAirConditioning className={iconStyle} />;
    default:
      return null;
  }
};
export default Icons;
