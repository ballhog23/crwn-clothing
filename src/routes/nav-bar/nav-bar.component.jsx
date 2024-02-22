import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn-clothing-logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDownComponent from "../../components/cart-dropdown/cart-dropdown.components";
import "./nav-bar.styles.scss";

const Navbar = () => {
    // whenever a user signs in/out successfully, this component will re-render because the UserContext has been updated
    const { currentUser } = useContext(UserContext);

    const { isCartDropdownOpen } = useContext(CartContext);

    return (
        <>

            <header className="site-header">
                <Link className="logo-container" to="/">
                    <Logo />
                </Link>
                <nav className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Sign In
                        </Link>
                    )}
                    <CartIcon/>
                </nav>
                {isCartDropdownOpen && <CartDropDownComponent />}
            </header>
            <Outlet />

        </>
    );
};

export default Navbar;
