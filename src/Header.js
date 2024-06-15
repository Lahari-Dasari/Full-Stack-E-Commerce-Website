import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleauthentication = () => {
        if(user)
        {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
         <Link to = '/'>
        <img className ='header_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <Link to = {!user && '/login'}>
            <div onClick={handleauthentication} className='header__category'>
                <span className='header__lineOne'>Hello {user ? user.email: 'User'}</span>
                <span className='header__lineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
            </div>
            </Link>
            <Link to = '/orders'>
            <div className='header__category'>
            <span className='header__lineOne'>Returns</span>
                <span className='header__lineTwo'>& Orders</span>
            </div>
            </Link>
            <div className='header__category'>
            <span className='header__lineOne'>Your</span>
                <span className='header__lineTwo'>Prime</span>
            </div>
            <Link to = '/checkout'>
            <div className='header_basket'>
                <ShoppingBasketIcon/>
                <span className='header__lineTwo header_basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header