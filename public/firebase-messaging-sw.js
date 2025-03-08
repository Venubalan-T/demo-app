// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

try {
  firebase.getApp();
  console.log("Firebase app already initialized");
} catch (e) {
  console.log("Firebase app not initialized. Initializing now from SW.");
  firebase.initializeApp({
    apiKey: "AIzaSyC1LmPCNzewKJmzYpJDw990qMYhwpsMhX0",
    authDomain: "chatapp-5a00d.firebaseapp.com",
    projectId: "chatapp-5a00d",
    storageBucket: "chatapp-5a00d.firebasestorage.app",
    messagingSenderId: "315766749018",
    appId: "1:315766749018:web:78ae19de33ec0fb28ae563",
  });
}

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
