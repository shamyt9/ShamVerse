// /js/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyBbP1xO_wVEUwRSDVn80K9gVAg-u8aIVls',
    authDomain: 'portfolio-d2476.firebaseapp.com',
    projectId: 'portfolio-d2476',
    storageBucket: 'portfolio-d2476.firebasestorage.app',
    messagingSenderId: '80608562519',
    appId: '1:80608562519:web:6125eaa7a5aa8515838212',
    measurementId: 'G-H5TG11D2JL',
};

const app = initializeApp(firebaseConfig);
const emailAdmin = 'alishamshad456sa@gmail.com';
const emailAdmin_2 = 'mrsham456sa@gmail.com';
export const auth = getAuth(app);
export const db = getFirestore(app);
export { emailAdmin, emailAdmin_2 };
