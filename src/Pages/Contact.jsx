import React from "react";
import Form from "../Components/Form";
import ContactData from "../Components/ContactData";
import "../Styles/Contact.css"

const Contact = () => {
    return (
        <div className="Contact-container">
        <h2>Contactanos</h2>
        <div className="Contact-content">
        <Form/>
        <ContactData render="contact"/>
        </div>
        </div>
    )
}
export default Contact;