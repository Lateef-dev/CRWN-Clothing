import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => {
    const history = useHistory();
    return (
        <HeaderContainer>
            <LogoContainer to='/' onClick={() => {
                console.log(history, "homepage History")
                history.push('/')
            }
            }>
                <Logo className='logo' />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink onClick={() => {
                    console.log(history, "shopHistory")

                    history.push('/shop')
                }
                } to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact' onClick={() => {
                    console.log(history, "contactHistory")
                    history.push('/shop')
                }}>
                    CONTACT
                </OptionLink >
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/signin' onClick={() => {
                            console.log(history, "signinHistory")
                            history.push('/signin')
                        }}> SIGN IN
                        </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>

            {
                hidden ? null :
                    <CartDropdown />
            }
        </HeaderContainer >

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(
    mapStateToProps
)(Header));
