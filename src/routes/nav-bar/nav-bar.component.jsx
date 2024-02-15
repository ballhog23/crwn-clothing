import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn-clothing-logo.svg';
import './nav-bar.styles.scss';

const Navbar = () => {
    return (
        <>
            <header className='site-header'>
                <Link className='logo-container' to="/">
                    <Logo />
                </Link>
                <nav className='nav-links-container'>
                    <Link className='nav-link' to="/shop">Shop</Link>
                    <Link className='nav-link' to="/auth">Sign In</Link>
                    <Link className='nav-link' to="/cart">Cart</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar;