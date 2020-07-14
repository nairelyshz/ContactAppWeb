import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';
import '../styles/loginform.css';
import AuthApi from '../services/authApi';

class LoginForm extends React.Component{
  state = {
    email: '',
    password: ''
  };
  handleSubmit = (e) => {
    e.preventDefault();// no hace reload
    this.sendLogin();
  };

  sendLogin = () =>{
    this.api = new AuthApi();
    this.api.login(this.state).then((response)=>{
      console.log(response);
    });
  }

  handleField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeForm = () => {
    this.props.onNav('register');
  }

  render(){
    return (
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <input
              placeholder='Email'
              className="form-control"
              type="email"
              name="email"
              onChange={this.handleField}
            />
          </div>

          <div className="form-group">
            <input
              placeholder='Password'
              className="form-control"
              type="password"
              name="password"
              onChange={this.handleField}
            />
          </div>
          {/* <Link to='/home'> */}
            <button  className="btn btn-primary">
              Login
            </button>
          {/* </Link> */}
        </form>
        <div  className="login-btn">
          <button className="btn btn-redirect" onClick={this.changeForm}>
            Register
          </button>
        </div>
      </div>    
    );
  }
  
}

export default LoginForm;
