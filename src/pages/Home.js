import React from 'react';
import './Home.scss';
import Directory from '../components/Directory/Directory';
import Menu from '../components/Menu/Menu';

const Home = () => {
  return (
    <div className="home">
      <Directory>
        <Menu />
      </Directory>
    </div>
  );
};

export default Home;
