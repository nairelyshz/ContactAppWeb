import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '../components/loginForm';


class Auth {
    constructor(props){

    }

    render(){
        return (
            <LoginForm/>
          );
    }
  
}

export default Auth;
