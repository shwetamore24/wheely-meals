import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, image, size }) => {
  let menuItemClass = 'menu-item';

  if (size) menuItemClass = `${menuItemClass} ${size}`;
  console.log(image);
  return (
    <div className={menuItemClass}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">ORDER NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
