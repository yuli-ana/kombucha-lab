import firebase from 'firebase/app';
import 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD73GGG-hzzPQqu1xUqCyrSzeFxGSEvUNI",
  authDomain: "kombucha-lab.firebaseapp.com",
  databaseURL: "https://kombucha-lab.firebaseio.com",
  projectId: "kombucha-lab",
  storageBucket: "kombucha-lab.appspot.com",
  messagingSenderId: "927556905744",
  appId: "1:927556905744:web:0ba35bb412dfd209e05395"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;