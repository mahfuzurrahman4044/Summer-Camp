import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase";
// import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    // const logOut = () => {
    //     setLoader(true);
    //     return signOut(auth);
    // }

    // const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //     });
    // }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         console.log('current user', currentUser);

    //         // get and set token
    //         if (currentUser) {
    //             axios.post('/jwt', { email: currentUser.email })
    //                 .then(data => {
    //                     // console.log(data.data.token)
    //                     localStorage.setItem('access-token', data.data.token)
    //                     setLoader(false);
    //                 })
    //         }
    //         else {
    //             localStorage.removeItem('access-token')
    //             setLoader(false);
    //         }


    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
