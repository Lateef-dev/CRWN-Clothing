import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector'


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    const history = useHistory();
    return (
        <div className="header">
            <Link className='logo-container' to='/' onClick={() => {
                console.log(history, "homepage History")
                history.push('/')
            }
            }>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' onClick={() => {
                    console.log(history, "shopHistory")

                    history.push('/shop')
                }
                } to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact' onClick={() => {
                    console.log(history, "contactHistory")
                    history.push('/shop')
                }}>
                    CONTACT
                </Link >
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                        :
                        <Link className='option' to='/signin' onClick={() => {
                            console.log(history, "signinHistory")
                            history.push('/signin')
                        }}> SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>

            {
                hidden ? null :
                    <CartDropdown />
            }
        </div >

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(
    mapStateToProps
)(Header));
