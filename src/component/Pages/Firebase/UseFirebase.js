import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialization from './firebase.init';

firebaseInitialization();

const UseFirebase = () => {


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');

    const [error, setError] = useState('');




    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const googleSignIn = () => {

        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // onAuthState changed user behaviour

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})

            }
            setIsLoading(false);
        });
    }, [])


    //   log out

    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).finally(() => {
            setIsLoading(false)
        });
    }


    // create user with email and password

    const createUserWithEmail = (e) => {

        e.preventDefault();
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                updateUserProfile();
                logOut();


            }).catch((err) => {
               
               setError(err.message);
               
              });
    }

    // sign in with email

    const signInWithEmail = () => {

        // e.preventDefault();


        return signInWithEmailAndPassword(auth, email, password)

    }


    // update user profile
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
            // Profile updated!
            // ...
        })

    }


    return {
        googleSignIn,
        logOut,
        user,
        isLoading,
        setIsLoading,
        createUserWithEmail,
        setUserEmail,
        setUserPassword,
        signInWithEmail,
        setUserName,
        setUser,
        error,
        setError


    }

};

export default UseFirebase;