import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

const Indian = () => {
  return <div>Indian Cuisine</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/indian" component={Indian} />
      </Switch>
      {/* <Home /> */}
    </div>
  );
}

export default App;
