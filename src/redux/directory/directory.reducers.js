// import { UserActionTypes } from './user.types';

// assets
import car from '../../assets/car.jpg';
import womens from '../../assets/womens.jpg';
import mens from '../../assets/mens.jpg';
import shoes from '../../assets/shoes.jpg';
import wine from '../../assets/wine.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: car,
      linkUrl: 'shop/hats',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: shoes,
      linkUrl: 'shop/jackets',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: wine,
      linkUrl: 'shop/sneakers',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: womens,
      linkUrl: 'shop/womens',
      size: 'large',
      id: 4
    },
    {
      title: 'men',
      imageUrl: mens,
      linkUrl: 'shop/mens',
      size: 'large',
      id: 5
    }
  ]
};

export default function directoryReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
