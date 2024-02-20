import {createContext, useState} from 'react';

export const CartContext = createContext({
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const value = {isCartDropdownOpen, setIsCartDropdownOpen}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}