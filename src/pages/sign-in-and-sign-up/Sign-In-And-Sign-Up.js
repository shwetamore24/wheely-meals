import React from 'react';

import './Sign-In-And-Sign-Up.scss';

import SignIn from '../../components/Sign-In/Sign-In';
import SignUp from '../../components/Sign-Up/Sign-Up';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
