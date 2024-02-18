import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn-clothing-logo.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './nav-bar.styles.scss';

const Navbar = () => {
    // whenever a user signs in/out successfully, this component will re-render because the UserContext has been updated
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <header className='site-header'>
                <Link className='logo-container' to="/">
                    <Logo />
                </Link>
                <nav className='nav-links-container'>
                    <Link className='nav-link' to="/shop">Shop</Link>
                    {
                        currentUser ?
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                            :
                            <Link className='nav-link' to="/auth">Sign In</Link>
                    }
                    {/* <Link className='nav-link' to="/cart">Cart</Link> */}
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar;