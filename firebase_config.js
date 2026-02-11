// Firebase Configuration
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing one)
// 3. Go to Project Settings -> General -> "Your apps" section
// 4. Click "</>" icon to create a Web App
// 5. Copy the "firebaseConfig" object and paste it below

const firebaseConfig = {
    apiKey: "AIzaSyCfpIBRUzSQdT8K3mPQ_lVz-vOeFJmjAKo",
    authDomain: "web-hanja-sync.firebaseapp.com",
    projectId: "web-hanja-sync",
    storageBucket: "web-hanja-sync.firebasestorage.app",
    messagingSenderId: "193717531163",
    appId: "1:193717531163:web:6fc37544d4401fe8d27ebe",
    measurementId: "G-3111WPM31Q"
};

// Initialize Firebase (Compat version for simple HTML usage)
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
} else {
    console.error("Firebase SDK not loaded.");
}
