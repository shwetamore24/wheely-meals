import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-In-And-Sign-Up';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './store/user/user-actions';
import userReducer from './store/user/user-reducer';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
        {/* <Home /> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
