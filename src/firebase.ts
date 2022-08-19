import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig: any = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
