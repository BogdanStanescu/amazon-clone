import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDndjWQE349go_Y_9bHu7rxHo-estma_1Q",
  authDomain: "clone-408b9.firebaseapp.com",
  projectId: "clone-408b9",
  storageBucket: "clone-408b9.appspot.com",
  messagingSenderId: "579957400007",
  appId: "1:579957400007:web:443bec51c2b1496bde39e2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };