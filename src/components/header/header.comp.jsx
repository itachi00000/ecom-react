import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// firebase - google auth
import { auth } from '../../firebase/firebase.utils';
// reselect (redux)
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// comp
import CartIcon from '../cart-icon/cart-icon.comp';
import CartDropdown from '../cart-dropdown/cart-dropdown.comp';

// style & img
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const mapStateToProps = createStructuredSelector({
  currentUserRx: selectCurrentUser,
  hiddenRx: selectCartHidden
});

function Header({ currentUserRx, hiddenRx }) {
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
        {currentUserRx ? (
          // button ????
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN-IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenRx ? null : <CartDropdown />}
    </div>
  );
}

export default connect(mapStateToProps)(Header);
