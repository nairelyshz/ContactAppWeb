import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';
import '../styles/loginform.css';
import AuthApi from '../services/authApi';

class RegisterForm extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    uid: ''
  };
  handleSubmit = (e) => {
    e.preventDefault();// no hace reload
    this.sendRegister();
  };

  sendRegister = (e) => {
    this.setState({uid: this.state.email});
    
    this.api = new AuthApi();
    this.api.register(this.state).then((response) =>{
      console.log(response);
    })
  }

  handlerFields = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  changeForm = () => {
    this.props.onNav('login');
  }

  render(){
    return (
      <div className="form-container">
        <h3>RegisterForm</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              placeholder='First name'
              onChange={this.handlerFields}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Last name'
              onChange={this.handlerFields}
              className="form-control"
              type="text"
              name="lastName"
            />
          </div>

          <div className="form-group">
            <input
              placeholder='Email'
              onChange={this.handlerFields}
              className="form-control"
              type="email"
              name="email"
            />
          </div>

          <div className="form-group">
            <input
              placeholder='Password'
              onChange={this.handlerFields}
              className="form-control"
              type="password"
              name="password"
            />
          </div>

          
          <div className="form-group">
            <input
              placeholder='Contact Number'
              onChange={this.handlerFields}
              className="form-control"
              type="tel"
              name="contactNumber"
            />
          </div>
          {/* <Link to='/home'> */}
            <button  className="btn btn-primary">
              Save
            </button>
          {/* </Link> */}
          
        </form>  
        <div onClick={this.changeForm} className="login-btn">
          <button  className="btn btn-redirect">
            Login
          </button>
        </div> 
      </div>    
    );
  }
  
}

export default RegisterForm;
