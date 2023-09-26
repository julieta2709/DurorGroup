import React from "react";
import Card from "../Components/Card";
import { FaArrowsAlt, FaLightbulb, FaRegHandshake, FaMapMarkedAlt } from "react-icons/fa";

const Home = () => {
    return (
        <div>
        <h1>Bienvenidos a Duror Group</h1>
        <h2>Proporcionamos soluciones a medida</h2>
        <Card
        title="Versátiles"
        icon={<FaArrowsAlt/>}
        description="Nos adaptamos a las necesidades de cada cliente"
      />
      <Card
        title="Soluciones Personalizadas"
        icon={<FaLightbulb/>}
        description="Otra descripción de tarjeta"
      />
        <p>
          En Duror Group, nos enorgullece ser versátiles y adaptarnos a las necesidades específicas de cada cliente. Sabemos que cada proyecto es único y requiere soluciones personalizadas, por lo que trabajamos de cerca con nuestros clientes para entender sus necesidades y proporcionar soluciones a medida.
        </p>
        <p>
          Ya sea que esté buscando servicios de mantenimiento preventivo o correctivo, construcción de obras civiles, instalaciones eléctricas, servicios de limpieza o cualquier otro servicio relacionado, estamos aquí para ayudarle. Nos aseguramos de que cada proyecto se adapte a sus necesidades y presupuesto, y trabajamos con usted en cada paso del camino para garantizar su satisfacción.
        </p>
        <p>
          Contamos con dos equipos de trabajo: uno en el Polo de Ezeiza y alrededores, y otro, en la zona norte de GBA y CABA.
        </p>
        <p>
          En Duror Group, estamos comprometidos con la excelencia y la satisfacción del cliente.
        </p>
      </div>
    )
}
export default Home;