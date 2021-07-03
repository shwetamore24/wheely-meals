import React from 'react';
import './Directory.scss';

const Directory = (props) => {
  return <div className="directory-menu">{props.children}</div>;
};

export default Directory;
