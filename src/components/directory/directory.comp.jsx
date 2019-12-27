import React from 'react';

import './directory-style.scss';

import MenuItem from '../menu-item/menu-item.comp';

// assets
import car from '../../assets/car.jpg';
import womens from '../../assets/womens.jpg';
import mens from '../../assets/mens.jpg';
import shoes from '../../assets/shoes.jpg';
import wine from '../../assets/wine.jpg';

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'car',
          imageUrl: car,
          linkUrl: 'car',
          id: 1
        },
        {
          title: 'shoes',
          imageUrl: shoes,
          linkUrl: '',
          id: 2
        },
        {
          title: 'wine',
          imageUrl: wine,
          linkUrl: '',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: womens,
          linkUrl: '',
          size: 'large',
          id: 4
        },
        {
          title: 'men',
          imageUrl: mens,
          linkUrl: '',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
