// ======================================================
// 1. FIREBASE ARCHITECTURE & INITIALIZATION (CDN Based)
// ======================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your verified live Firebase console credentials
const firebaseConfig = {
    apiKey: "AIzaSyDvUuFFEDE6NFJqBLBnmZ2TCSFpSPAJtRs",
    authDomain: "lovey-web-diary.firebaseapp.com",
    projectId: "lovey-web-diary",
    storageBucket: "lovey-web-diary.firebasestorage.app",
    messagingSenderId: "359717271008",
    appId: "1:359717271008:web:dd7a95012862e5b52d6785",
    measurementId: "G-5MCNKBNTXR"
};

// Initialize Core Engines
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Private Access Security Gatekeeper Whitelist
const WHITELISTED_EMAILS = [
    "banaagmhelric27@gmail.com",
    "jairagmail@gmail.com"  // 👈 Replace with Jaira's Gmail address once known
];

// Key Milestone Tracking Dates
const DATE_MET = new Date("2025-10-18");      // Date you met
const DATE_TOGETHER = new Date("2026-04-27"); // Official relationship date

// ======================================================
// 2. DOM ELEMENT INTERFACE TARGETS
// ======================================================
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const authScreen = document.getElementById('auth-screen');
const appScreen = document.getElementById('app-screen');
const authStatus = document.getElementById('auth-status');
const usernameDisplay = document.getElementById('username-display');
const dateToday = document.getElementById('date-today');
const greetText = document.getElementById('greet-text');

// Hardcode handwritten calendar stamp display immediately on screen load
const options = { year: 'numeric', month: 'short', day: 'numeric' };
if (dateToday) {
    dateToday.innerText = new Date().toLocaleDateString('en-US', options);
}

// ======================================================
// 3. AUTHENTICATION & LOCK CONSTRAINTS ENGINE
// ======================================================

// Handle Login Tap
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        authStatus.innerText = "Connecting to Google security guard...";
        signInWithPopup(auth, provider).catch(error => {
            console.error("Auth Exception: ", error);
            authStatus.innerText = "Authentication dropped or canceled. Try again.";
        });
    });
}

// Handle Logout Tap
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth);
    });
}

// Global Session Monitor Strategy
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Evaluate incoming address against our whitelist
        if (WHITELISTED_EMAILS.includes(user.email.toLowerCase())) {
            usernameDisplay.innerText = user.displayName || "Partner";
            
            // UI State Transition
            authScreen.classList.remove('active');
            authScreen.classList.add('hidden');
            appScreen.classList.remove('hidden');
            appScreen.classList.add('active');
            authStatus.innerText = "A private digital safe space for our memories.";
            
            // Trigger Calculations & UI Population
            updateHUDCounters();
            triggerDynamicGreetings(user.displayName || "Love");
        } else {
            // Rejection routing
            authStatus.innerText = "Access Denied. This diary is exclusively private.";
            signOut(auth);
        }
    } else {
        // Return back to cover screen viewport
        appScreen.classList.remove('active');
        appScreen.classList.add('hidden');
        authScreen.classList.remove('hidden');
        authScreen.classList.add('active');
    }
});

// ======================================================
// 4. COMPUTING METRICS & HOLIDAY GREETER ACTIONS
// ======================================================

function updateHUDCounters() {
    const now = new Date();
    
    const togetherDiff = now - DATE_TOGETHER;
    const daysTogether = Math.floor(togetherDiff / (1000 * 60 * 60 * 24));
    
    const metDiff = now - DATE_MET;
    const daysKnown = Math.floor(metDiff / (1000 * 60 * 60 * 24));

    const togetherEl = document.getElementById('days-together');
    const knownEl = document.getElementById('days-known');

    if (togetherEl) togetherEl.innerText = Math.max(0, daysTogether);
    if (knownEl) knownEl.innerText = daysKnown;
}

function triggerDynamicGreetings(name) {
    if (!greetText) return;
    
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 1-indexed conversion
    const currentDate = now.getDate();

    // 1. Anniversary Verification (April 27)
    if (currentMonth === 4 && currentDate === 27) {
        greetText.innerText = `Happy Anniversary, ${name}! 🥂 Another beautiful year of writing our story together. I love you!`;
    }
    // 2. Monthsary Verification (27th of alternative months)
    else if (currentDate === 27) {
        greetText.innerText = `Happy Monthsary, my love! 💖 Thank you for making every single day feel so incredibly special.`;
    }
    // 3. Christmas Holiday Alignment
    else if (currentMonth === 12 && currentDate === 25) {
        greetText.innerText = `Merry Christmas, ${name}! 🎄 My absolute favorite gift every single year is you.`;
    }
    // 4. Standard Daily Prompt Falling Back
    else {
        greetText.innerText = `Welcome back to our safe space, ${name}! What beautiful memory are we tracking today? ❤️`;
    }
}

// ======================================================
// 5. PHASE 1 NAV BAR CLICK EVENT ACTION INTERFACES
// ======================================================
const prevBtn = document.getElementById('prev-page-btn');
const nextBtn = document.getElementById('next-page-btn');
const musicToggle = document.getElementById('music-dock-toggle');
const settingsToggle = document.getElementById('settings-dock-toggle');

if (prevBtn) prevBtn.addEventListener('click', () => console.log('Previous diary page triggered!'));
if (nextBtn) nextBtn.addEventListener('click', () => console.log('Next diary page triggered!'));
if (musicToggle) musicToggle.addEventListener('click', () => alert('Music Engine Dock coming up next! 🎵'));
if (settingsToggle) settingsToggle.addEventListener('click', () => alert('Settings & Profile Modal tray coming soon! ⚙️'));