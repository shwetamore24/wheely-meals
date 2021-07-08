import React, { Component } from 'react';

import './Sign-In.scss';

import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  formSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  changeHander = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.formSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.changeHander}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.changeHander}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {''}
              Sign In With Google {''}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
