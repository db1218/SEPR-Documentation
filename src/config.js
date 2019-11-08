
// Firebase config
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAEuJAeNnrJnIeqZ1IBqjAzbguGwD1UAfo",
  authDomain: "sepr-documentation.firebaseapp.com",
  databaseURL: "https://sepr-documentation.firebaseio.com",
  projectId: "sepr-documentation",
  storageBucket: "sepr-documentation.appspot.com",
  messagingSenderId: "468293746914",
  appId: "1:468293746914:web:43cc1f092dc3cc48f55ebb",
  measurementId: "G-JGHPJEH7DC"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

// Get from storage
export function getFolderItems(ref, prefixes=false) {
  return new Promise((resolve, reject) => {
      ref.listAll().then(response => {
          if (response.items.length !== 0) {
              resolve(response.items)
          } else if (prefixes) {
              resolve(response.prefixes);
          } else {
              response.prefixes.map(folder => {
                  return resolve(getFolderItems(ref.child(`/${folder.name}`)))
              })
          }
      })
      .catch(error => {
          reject(error);
      });
  });
}

// Route details
export const NavigationOptions = [
    { id: 0, title: "Requirements", link: "/requirements"},
    { id: 1, title: "Architecture", link: "/architecture"},
    { id: 2, title: "Risk Assessment", link: "/riskassessment"}
  ];