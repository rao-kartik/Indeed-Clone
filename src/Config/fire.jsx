import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKaUa8o5bZ-yr0awXvzc7hK8DAUKkNVXs",
    authDomain: "teamberyllium-indeedclone.firebaseapp.com",
    projectId: "teamberyllium-indeedclone",
    storageBucket: "teamberyllium-indeedclone.appspot.com",
    messagingSenderId: "398015790702",
    appId: "1:398015790702:web:f75d558579e26d2791f07f",
    measurementId: "G-4E8Y9MBNME"
};

export const fire = firebase.initializeApp(firebaseConfig);