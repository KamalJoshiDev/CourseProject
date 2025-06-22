import React, { createContext, useContext ,useEffect,useState} from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    onAuthStateChanged 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4EEe3d1Enzb8xIF5w67DITRgGPUXj2rk",
    authDomain: "course-vault.firebaseapp.com",
    projectId: "course-vault",
    storageBucket: "course-vault.appspot.com",  
    messagingSenderId: "1011571783757",
    appId: "1:1011571783757:web:c1a4c7803331a4c0f64404"
};


const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp); 
const FirebaseGoogleAuth = new GoogleAuthProvider();


FirebaseGoogleAuth.setCustomParameters({
    prompt: 'select_account'
});

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FirebaseAuth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const SignUpWithGoogle = async () => {
        try {
            const result = await signInWithPopup(FirebaseAuth, FirebaseGoogleAuth);
 
            return {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                accessToken: await result.user.getIdToken()
            };
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
            throw error;
        }
    };

    const LogOutUser = async () => {
        try {
            await signOut(FirebaseAuth);
        } catch (error) {
            console.error("Error signing out:", error.message);
            throw error;
        }
    };

    return (
        <FirebaseContext.Provider 
            value={{ 
                SignUpWithGoogle, 
                LogOutUser,
                currentUser,
                authLoading: loading 
            }}
        >
            {!loading && children}
        </FirebaseContext.Provider>
    );
};