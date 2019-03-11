import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from './Logo';

import LoginForm from './LoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignupForm from './SignupForm';

function Form(props) {
  
  const {path} = props;
  return(
    <div className='app'>
      <div className="app__left-img" />
        <div className="app__primary" >
          <div className='app__form-wrapper'>
            <Logo />
            <Route path={`${path}/login`} component={LoginForm} />
            <Route path={`${path}/signup`} component={SignupForm} />
            <Route path={`${path}/account-recovery`} exact component={ForgotPasswordForm} />
          </div>
        </div>
    </div>
  )
}

export default Form;
