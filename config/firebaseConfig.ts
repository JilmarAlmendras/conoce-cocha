import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtRJlW2s7LBSSHmGdIP5h7VNkMu8igmf4",
  authDomain: "chatapp-2d945.firebaseapp.com",
  projectId: "chatapp-2d945",
  storageBucket: "chatapp-2d945.appspot.com",
  messagingSenderId: "47017469249",
  appId: "1:47017469249:web:e16710da91b719dd352dc0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
