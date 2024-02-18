import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// Create a context for managing user-related data.
export const UserContext = createContext({
    // empty state of the object should be null, usually because you want to null check to see if you have a user object that exists or not
    // The current user state is initially set to null.
    currentUser: null,
    // The function to set the current user is initialized as a no-operation (does nothing).
    setCurrentUser: () => null
});

// A provider component that wraps its children with the user context.
export const UserProvider = ({ children }) => {
    // Initialize the state for the current user, starting as null.
    const [currentUser, setCurrentUser] = useState(null);
    // Create an object with the current user and the function to set it.
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        // onAuthStateChanged Observable returns an unsubscribe that allows us to stop observing the user
        const unsubscribe = onAuthStateChangedListener((user) => {
            // create the user document
            if (user) createUserDocumentFromAuth(user);

            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    // Return the provider, allowing components to access user-related data.
    // The 'value' prop exposes the current user state and the set function to child components.
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
