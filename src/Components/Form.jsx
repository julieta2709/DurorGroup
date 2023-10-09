import React, { useState } from 'react';
import "../Styles/Form.css"

function Form () {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [consulta, setConsulta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || consulta.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
    if (!correo.includes('@') || !correo.includes('.')) {
      alert('Por favor, ingrese una dirección de correo electrónico válida.');
      return;
    }
    // Aquí puede agregar su lógica para enviar la consulta
    alert('Consulta enviada con éxito! Nos contactaremos con Ud. a la brevedad');
    setNombre('');
    setApellido('');
    setCorreo('');
    setConsulta('');
  }

  return (
    <form className='Form-container' onSubmit={handleSubmit}>
      <h3>Envianos tu consulta</h3>
      <div>
        <label className='Form-label' htmlFor="nombre">Nombre:</label>
        <input className="Form-input" type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </div>
      <div>
        <label className='Form-label' htmlFor="apellido">Apellido:</label>
        <input className="Form-input" type="text" id="apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
      </div>
      <div>
        <label className='Form-label' htmlFor="correo">Correo Electrónico:</label>
        <input className="Form-input" type="email" id="correo" placeholder='nombre@email.com' value={correo} onChange={(event) => setCorreo(event.target.value)} />
      </div>
      <div>
        <label className='Form-label' htmlFor="consulta">Consulta:</label>
        <textarea className='Form-textarea' id="consulta" value={consulta} onChange={(event) => setConsulta(event.target.value)} />
      </div>
      <div className='button-container'>
      <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default Form;