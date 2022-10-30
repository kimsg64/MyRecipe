// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    authDomain: process.env.REACT_APP_authDomain,
    apiKey: process.env.REACT_APP_apiKey,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DB
export const db = getFirestore(app);
// Storage
export const storage = getStorage(app);
export const stepsImgRef = ref(storage, 'steps');
export const uploadSteps = (file) => {
    uploadBytes(stepsImgRef, file)
        .then((result) => {
            console.log('file uploaded!');
            console.log(result);
            console.log(file);
        })
        .catch((error) => {
            console.dir(error);
        });
};

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
