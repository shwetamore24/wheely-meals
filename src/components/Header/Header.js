import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/order">
          ORDER
        </Link>
        <Link className="option" to="/order">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
