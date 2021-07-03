import React from 'react';
import './Home.scss';
import Directory from '../components/Directory/Directory';
import Menu from '../components/Menu/Menu';

const Home = () => {
  return (
    <div className="home">
      <Directory>
        <Menu />
        {/* <div className="menu-item">
          <div className="content">
            <h1 className="title">Thai</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chinese</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mexican</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Indian</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Italian</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div> */}
      </Directory>
    </div>
  );
};

export default Home;
