import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAWTCYdBZzFt9nrW309mi5yssRI_E7NF6k",
	authDomain: "crop-14e8e.firebaseapp.com",
	projectId: "crop-14e8e",
	storageBucket: "crop-14e8e.firebasestorage.app",
	messagingSenderId: "878721431739",
	appId: "1:878721431739:web:527c5483ba7b6ce653919e",
	measurementId: "G-HL40LTDKJZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



