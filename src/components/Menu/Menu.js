import React, { Component } from 'react';
import MenuItem from '../Menu/MenuItem';

import indianHeroImage from '../../../src/assets/images/indian-hero.jpg';
import italianHeroImage from '../../../src/assets/images/italian-hero.jpg';
import chineseHeroImage from '../../../src/assets/images/chinese-hero.jpg';
import thaiHeroImage from '../../../src/assets/images/thai-hero.jpg';
import mexicanHeroImage from '../../../src/assets/images/mexican-hero.jpg';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menuOptions: [
        {
          id: 1,
          title: 'Thai',
          image: thaiHeroImage,
        },
        {
          id: 2,
          title: 'Chinese',
          image: chineseHeroImage,
        },
        {
          id: 3,
          title: 'Mexican',
          image: mexicanHeroImage,
        },
        {
          id: 4,
          title: 'Indian',
          image: indianHeroImage,
          size: 'large',
        },
        {
          id: 5,
          title: 'Italian',
          image: italianHeroImage,
          size: 'large',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.menuOptions.map(({ id, title, image, size }) => {
          return <MenuItem key={id} title={title} image={image} size={size} />;
        })}
      </div>
    );
  }
}

export default Menu;
