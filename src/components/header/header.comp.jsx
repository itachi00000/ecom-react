import React from 'react';
import { Link } from 'react-router-dom';

// auth
import { auth } from '../../firebase/firebase.utils';

// comp
import Cart from '../cart/cart.comp';

// style
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          // button ????
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN-IN
          </Link>
        )}
        <Cart currentUser={currentUser} />
      </div>
    </div>
  );
}
