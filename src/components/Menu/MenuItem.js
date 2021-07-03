import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, image, size, history, linkUrl, match }) => {
  let menuItemClass = 'menu-item';

  if (size) menuItemClass = `${menuItemClass} ${size}`;
  console.log(image);
  return (
    <div
      className={menuItemClass}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
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

export default withRouter(MenuItem);
