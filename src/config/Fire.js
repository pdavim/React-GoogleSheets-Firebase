import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCvpQ7a3Q9s6ZVM0kTZwqvHJ-_T__Dbs0c",
  authDomain: "react-auth-fengshui.firebaseapp.com",
  databaseURL: "https://react-auth-fengshui.firebaseio.com",
  projectId: "react-auth-fengshui",
  storageBucket: "react-auth-fengshui.appspot.com",
  messagingSenderId: "888341116611",
  appId: "1:888341116611:web:129a10ef39ec60a9"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
