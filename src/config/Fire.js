import firebase from "firebase";

const config = {
  apiKey: "*********************",
  authDomain: "*********************",,
  databaseURL: "*********************",,
  projectId: "*********************",,
  storageBucket: "*********************",,
  messagingSenderId: "*********************",,
  appId: "*********************",
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
