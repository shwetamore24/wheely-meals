import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
      </Switch>
      {/* <Home /> */}
    </div>
  );
}

export default App;
