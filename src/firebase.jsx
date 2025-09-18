// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // 🔥 Replace with your Firebase project config
// const firebaseConfig = {
//   apiKey: "AIzaSyDWe9gqTxClhUaP9zAnwJ3RvJoigek70O0",
//   authDomain: "org-rag.firebaseapp.com",
//   projectId: "org-rag",
//   storageBucket: "org-rag.firebasestorage.app",
//   messagingSenderId: "1047038146771",
//   appId: "1:1047038146771:web:8652db3f8cd097c8a0fc26",
//   measurementId: "G-1C709YVYTH"
// };

// const app = initializeApp(firebaseConfig);

// // Auth + Firestore instances
// const auth = getAuth(app);
// const db = getFirestore(app);

// export default { auth, db };


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWe9gqTxClhUaP9zAnwJ3RvJoigek70O0",
  authDomain: "org-rag.firebaseapp.com",
  projectId: "org-rag",
  storageBucket: "org-rag.firebasestorage.app",
  messagingSenderId: "1047038146771",
  appId: "1:1047038146771:web:8652db3f8cd097c8a0fc26",
  measurementId: "G-1C709YVYTH"
};

export const app = initializeApp(firebaseConfig);