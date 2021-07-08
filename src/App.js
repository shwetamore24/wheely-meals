import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-In-And-Sign-Up';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }

      //this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
