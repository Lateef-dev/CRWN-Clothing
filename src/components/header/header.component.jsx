import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector'

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, props, hidden }) => (
    <div className="header">
        <Link className='logo-container' to='/' onClick={() => props.history.push('/')}>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' onClick={() => props.history.push('/shop')} to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact' onClick={() => props.history.push('/shop')}>
                CONTACT
            </Link >
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin' onClick={() => props.history.push('/signin')}> SIGN IN
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(
    mapStateToProps
)(withRouter(Header));
