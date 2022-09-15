// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import React from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAThqmvH_G8j7lMhRjsjlT2aAaGdGgzH6c',
    authDomain: 'myrecipe-87607.firebaseapp.com',
    projectId: 'myrecipe-87607',
    storageBucket: 'myrecipe-87607.appspot.com',
    messagingSenderId: '235120445580',
    appId: '1:235120445580:web:59f6ad6c3ec190c59553a9',
    measurementId: 'G-VKSWSFK95Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DB
export const db = getFirestore(app);

// Auth
export const auth = getAuth(app);
export const createNewUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
    signOut(auth);
};
export const getLoginStatus = (loginStateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            loginStateSetter(true);
        } else {
            loginStateSetter(false);
        }
    });
};
export const getUserInfo = (currentUserSetter: React.Dispatch<React.SetStateAction<string>>) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const email = user.email || '';
            currentUserSetter(email);
        } else {
            currentUserSetter('');
        }
    });
};
/**참조
 * https://firebase.google.com/docs/auth/admin/import-users?hl=ko
 */
export const getUid = (uidSetter: React.Dispatch<React.SetStateAction<string>>) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.email || '';
            uidSetter(uid);
        } else {
            uidSetter('');
        }
    });
};
