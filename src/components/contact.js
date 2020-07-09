import React from 'react';
import '../styles/contact.css';

function Contact(props) {
  
  return (
    <div className="Contact">
    <div className="Contact__section-name">
      <h3>
        {props.firstName} <br /> {props.lastName}
      </h3>
    </div>

    <div className="Contact__section-info">
      <h3>{props.email}</h3>
      <div>{props.contactNumber}</div>
    </div>
  </div>
  );
}

export default Contact;
