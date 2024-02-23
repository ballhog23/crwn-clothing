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

const removeCartItem = (cartItemsArray, productToRemove) => {
    // check to see if the cart contains the product that is being removed
    const existingCartItem = cartItemsArray.find(cartItem => cartItem.id === productToRemove.id);

    // if the cart item quantity is 1 and we click the decrement button, then remove the cart item
    if (existingCartItem.quantity === 1) {
        // evaluates to a boolean, if the cart item id is not equal to the product to remove, it will return all but the product to be removed
        return cartItemsArray.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    if (existingCartItem) {
        // return a new array of cart items (map)
        // if the cart contains the product that is being decremented, decrease the quantity
        // else return the existing cart item
        return cartItemsArray.map(cartItem => cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
        )
    }
};

const deleteCartItem = (cartItemsArray, productToDelete) => cartItemsArray.filter(cartItem => cartItem.id !== productToDelete.id);

// iterate through the cart items and determine the total of all items based on the quantity of the cart items

export const CartContext = createContext({
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    cartTotalPrice: 0,
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));

    const removeItemFromCart = (productToRemove) => setCartItems(removeCartItem(cartItems, productToRemove));

    const deleteItemFromCart = (productToDelete) => setCartItems(deleteCartItem(cartItems, productToDelete));

    // everytime the cart items array is updated, we need to update the cart count (small number within the icon)
    // useEffect will trigger whenever a new item is added/updated on the cart array
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const cartTotal = cartItems.reduce((totalAmount, cartItem) => totalAmount + cartItem.quantity * cartItem.price, 0);
        setCartTotalPrice(cartTotal)
    }, [cartItems]);



    const value = {
        isCartDropdownOpen,
        setIsCartDropdownOpen,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        cartTotalPrice,
        cartItems,
        cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}