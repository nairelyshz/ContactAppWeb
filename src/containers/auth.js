import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';
import '../styles/auth.css';

class Auth extends React.Component {
  state =  {screen: 'login'};


  changeComponentPadre = (component) => {
    this.setState({screen: component});
  }
  
  render(){
    return (
      <div className='auth-container'>
        {this.state.screen === 'login'        
          ? <LoginForm onNav={this.changeComponentPadre} />
          : <RegisterForm onNav={this.changeComponentPadre} />
        }
      </div>
      
    );
  }
  
  
}

export default Auth;
