// Import the Firebase modular SDK pieces
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. Paste your Firebase Credentials right here:
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvUuFFEDE6NFJqBLBnmZ2TCSFpSPAJtRs",
  authDomain: "lovey-web-diary.firebaseapp.com",
  projectId: "lovey-web-diary",
  storageBucket: "lovey-web-diary.firebasestorage.app",
  messagingSenderId: "359717271008",
  appId: "1:359717271008:web:dd7a95012862e5b52d6785",
  measurementId: "G-5MCNKBNTXR"
};

// Initialize Firebase App & Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 2. Access Whitelist Gatekeeper Configuration
const WHITELISTED_EMAILS = [
    "yourgmail@gmail.com",
    "jairagmail@gmail.com" // You can substitute or update this cleanly later!
];

// UI Element Targets
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const authScreen = document.getElementById('auth-screen');
const appScreen = document.getElementById('app-screen');
const authStatus = document.getElementById('auth-status');
const usernameDisplay = document.getElementById('username-display');
const dateToday = document.getElementById('date-today');

// Set handwritten date stamp immediately
const options = { year: 'numeric', month: 'short', day: 'numeric' };
dateToday.innerText = new Date().toLocaleDateString('en-US', options);

// 3. Handle Login Action
loginBtn.addEventListener('click', () => {
    authStatus.innerText = "Connecting to Google security guard...";
    signInWithPopup(auth, provider)
        .catch(error => {
            console.error(error);
            authStatus.innerText = "Authentication dropped. Try again.";
        });
});

// 4. Handle Logout Action
logoutBtn.addEventListener('click', () => {
    signOut(auth);
});

// 5. Global Persistent Session State Observer
onAuthStateChanged(auth, (user) => {
    if (user) {
        // A user signed in. Check the whitelist gatekeeper.
        if (WHITELISTED_EMAILS.includes(user.email.toLowerCase())) {
            // Success: Open the book!
            usernameDisplay.innerText = user.displayName || "Partner";
            
            authScreen.classList.remove('active');
            authScreen.classList.add('hidden');
            appScreen.classList.remove('hidden');
            appScreen.classList.add('active');
            authStatus.innerText = "A private digital safe space for our memories.";
        } else {
            // Denied: Not on the whitelist.
            authStatus.innerText = "Access Denied. This diary is exclusively private.";
            signOut(auth);
        }
    } else {
        // User is logged out. Force cover screen view.
        appScreen.classList.remove('active');
        appScreen.classList.add('hidden');
        authScreen.classList.remove('hidden');
        authScreen.classList.add('active');
    }
});