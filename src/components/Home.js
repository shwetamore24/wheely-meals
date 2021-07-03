import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="directory-menu">
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
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chinese</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Thai</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mexican</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
