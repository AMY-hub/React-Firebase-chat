import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyBHsyKkVoQwbdrq8VdX9aV0bItxCOTHnYU",
    authDomain: "chat-react-ex.firebaseapp.com",
    projectId: "chat-react-ex",
    storageBucket: "chat-react-ex.appspot.com",
    messagingSenderId: "45452069337",
    appId: "1:45452069337:web:6c30799d23a45904b771c8",
    measurementId: "G-89N0KSCN6K"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Context.Provider value={{ firebase, auth, firestore }}>
          <App/>
    </Context.Provider>
           )
