import React from 'react';
import '../styles/contact.css';

function LoginForm() {
  return (
    <div className="Badge">
    <div className="Badge__section-name">
      <h1>
        {this.props.firstName} <br /> {this.props.lastName}
      </h1>
    </div>

    <div className="Badge__section-info">
      <h3>{this.props.email}</h3>
      <div>{this.props.contactNumber}</div>
    </div>
  </div>
  );
}

export default LoginForm;
