import firebase from 'firebase/app'
import 'firebase/firestore'
 /*const firebaseConfig = {
    apiKey: "AIzaSyD32gh0oJ1eB1oYfhezhUcoM-YrKg8sWfk",
    authDomain: "test1-35e62.firebaseapp.com",
    databaseURL: "https://test1-35e62.firebaseio.com",
    projectId: "test1-35e62",
    storageBucket: "test1-35e62.appspot.com",
    messagingSenderId: "648745778970",
    appId: "1:648745778970:web:361449d7b4a86d9c7636a3"
}; */
const firebaseConfig = {
    projectId: "test1-35e62"
}

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

export const db = firebase.initializeApp(firebaseConfig).firestore()
