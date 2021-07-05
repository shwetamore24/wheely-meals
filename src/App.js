import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Order from './pages/order/Order';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
      </Switch>
      {/* <Home /> */}
    </div>
  );
}

export default App;
