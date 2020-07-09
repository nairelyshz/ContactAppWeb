import React from 'react';
import '../styles/contactForm.css';
class ContactForm extends React.Component {
  handleClick = e => {
    e.preventDefault();

    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div className="contact-form">
        
        <form onSubmit={this.props.updateList}>
        <div className="form-group">
            <input
              placeholder='First name'
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Last name'
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <input
              placeholder='Email'
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          
          <div className="form-group">
            <input
              placeholder='Contact Number'
              onChange={this.props.onChange}
              className="form-control"
              type="tel"
              name="contactNumber"
              value={this.props.formValues.contactNumber}
            />
          </div>

          <button  className="btn btn-primary">
            Save
          </button>

        </form>
      </div>
    );
  }
}

export default ContactForm;
