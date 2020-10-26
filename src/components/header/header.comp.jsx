/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import { Link } from 'react-router-dom';
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

// styled-comp
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from './header.style';

// style & img
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const mapStateToProps = createStructuredSelector({
  currentUserRx: selectCurrentUser,
  hiddenRx: selectCartHidden
});

function Header({ currentUserRx, hiddenRx }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUserRx ? (
          // button ????
          <OptionDiv role="link" tabIndex="0" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN-IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hiddenRx ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default connect(mapStateToProps)(Header);
