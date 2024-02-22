import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItemsArray, productToAdd) => {
    // check to see if the cart contains the product that is being added
    const existingCartItem = cartItemsArray.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        // return a new array of cart items (map)
        // if the cart contains the product that is being added, increase the quantity
        // else return the existing cart item
        return cartItemsArray.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        )
    }

    // return new array of existing cart items, add new cart item if item isn't in the cart already and set the quantity to 1
    return [...cartItemsArray, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));

    // everytime the cart items array is updated, we need to update the cart count (small number within the icon)
    // useEffect will trigger whenever a new item is added to the cart
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const value = { isCartDropdownOpen, setIsCartDropdownOpen, cartItems, addItemToCart, cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}