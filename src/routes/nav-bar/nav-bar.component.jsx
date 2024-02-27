import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn-clothing-logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDownComponent from "../../components/cart-dropdown/cart-dropdown.components";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./nav-bar.styles.jsx";

const Navbar = () => {
    // whenever a user signs in/out successfully, this component will re-render because the UserContext has been updated
    const { currentUser } = useContext(UserContext);

    const { isCartDropdownOpen } = useContext(CartContext);

    return (
        <>

            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                    ) : (
                        <NavLink to="/auth">Sign In</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartDropdownOpen && <CartDropDownComponent />}
            </NavigationContainer>
            <Outlet />

        </>
    );
};

export default Navbar;
