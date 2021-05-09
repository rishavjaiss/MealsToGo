import * as firebase from "firebase";
import { firebaseConfig } from "../../../env";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};

export const registerRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
