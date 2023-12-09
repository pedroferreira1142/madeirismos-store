import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCOVdZ0NpBHdg8lME5jZRdJvmb0ZSFNY54',
    authDomain: 'empresa-renato.firebaseapp.com',
    databaseURL: 'https://empresa-renato-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'empresa-renato',
    storageBucket: 'empresa-renato.appspot.com',
    messagingSenderId: '510436158171',
    appId: '1:510436158171:web:e22436a948454c6aad3afe',
    measurementId: 'G-6VXQMK2HJ7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database
export const db = getFirestore(app);

//auth
export const auth = getAuth(app);
