import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './Header.scss';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
