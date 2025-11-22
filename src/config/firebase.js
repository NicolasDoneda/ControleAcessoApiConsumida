import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDz-cLtj1Tik7yrxuetCmM0zLewVNKLpUY",
  authDomain: "controle-de-acesso-3fc10.firebaseapp.com",
  projectId: "controle-de-acesso-3fc10",
  storageBucket: "controle-de-acesso-3fc10.firebasestorage.app",
  messagingSenderId: "579714282008",
  appId: "1:579714282008:android:8e1e8806c6ce72a39d896d"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };