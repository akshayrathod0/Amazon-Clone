import React from 'react';
import './Header.css';
import amazon_logo from './images/amazon_logo.JPG';
import searchIcon from './images/search_icon.png';
import shoppingCart from './images/shopping_cart.JPG';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/" >
        <img className='header__logo' src={amazon_logo} alt='amazon logo' />
        </Link>

        <div className='header__search'>
            <input className='header__searchInput' type='text' />
             <img className='header__searchIcon' src={searchIcon} alt='search button'/>
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'> 
                <span className='header__optionLineOne'>
                    Hello {!user ? 'Geust': user.email}</span>
                <span className='header__optionLineTwo'>{user ?
                'Sign out' : 'Sign in'}</span>
            </div>
            </Link>

            <div className='header__option'> 
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'> 
                <span className='header__optionLineOne'>Your </span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
                <img className='header__shoppingBasket' src={shoppingCart} alt='shpping cart image'/>
                <span className='header__optionLineTwo header_bastetCount' >{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;