// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  Messaging,
  onMessage,
} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

class Firebase {
  static app: FirebaseApp;
  static messaging: Messaging;

  // Your web app's Firebase configuration
  private static firebaseConfig = {
    apiKey: "AIzaSyC1LmPCNzewKJmzYpJDw990qMYhwpsMhX0",
    authDomain: "chatapp-5a00d.firebaseapp.com",
    projectId: "chatapp-5a00d",
    storageBucket: "chatapp-5a00d.firebasestorage.app",
    messagingSenderId: "315766749018",
    appId: "1:315766749018:web:78ae19de33ec0fb28ae563",
  };

  static initialize() {
    setTimeout(() => {
      try {
        this.app = getApp();
      } catch (e) {
        console.log("Firebase app not initialized. Initializing now from UI", e);
        this.app = initializeApp(this.firebaseConfig);
      }
      this.messaging = getMessaging(this.app);
      this.generateToken();
      this.startForegroundMessageListening();
    }, 0);
  }

  static async generateToken() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(this.messaging, {
        vapidKey:
          "BALk700P0Cc8jvOXClfY_KSYicqBAbpAsPdxDcY49Lu-bpG6B4vJdvTHN1ZuS9qwr-kYRZOhnQoeDl1re6oQf_8",
      });
      console.log("Token: ", token);
    }
  }

  static startForegroundMessageListening() {
    onMessage(this.messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }
}

export default Firebase;
