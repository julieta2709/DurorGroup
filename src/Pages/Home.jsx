import React from "react";
import Card from "../Components/Card";
import "../Styles/Home.css";
const Home = () => {
  return (
    <div className="Home-container">
      <h1>Bienvenidos a DUROR <span className="logo-group">GROUP</span></h1>
      <h2>Proporcionamos soluciones a medida</h2>
      <div className="Home-cardContainer">
      <Card
        title="Versátiles"
        iconType="arrows"
        description="Nos adaptamos a las necesidades de cada cliente"
      />
      <Card
        title="Soluciones Personalizadas"
        iconType="lightbulb"
        description="Sabemos que cada proyecto es
        único"
      />
      <Card
        title="Colaboración Estrecha"
        iconType="handshake"
        description="Trabajamos de
        cerca para entender tus necesidades"
      />
      <Card
        title="Equipos de trabajo"
        iconType="map"
        description="En el polo de Ezeiza y alrededores y, en GBA Norte y CABA"
      />
      </div>
      <p className="Home-description">
        Ya sea que esté buscando servicios de mantenimiento preventivo o
        correctivo, construcción de obras civiles, instalaciones eléctricas,
        servicios de limpieza o cualquier otro servicio relacionado,
        <span className="Home-descriptionhighlighted"> ¡Estamos aquí para ayudarte!</span>
      </p>
    </div>
  );
};
export default Home;
