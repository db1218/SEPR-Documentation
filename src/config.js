
// Firebase config
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnwmwsmeon2AIVXMOK-tScDX4DVi7gvOA",
  authDomain: "sepr-docs.firebaseapp.com",
  databaseURL: "https://sepr-docs.firebaseio.com",
  projectId: "sepr-docs",
  storageBucket: "sepr-docs.appspot.com",
  messagingSenderId: "289846557989",
  appId: "1:289846557989:web:2797d01fe4a1b5a000aecc"
}

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

// Get from storage
export const getFolderItems = (ref, prefixes=false) => {
  return new Promise((resolve, reject) => {
      ref.listAll().then(response => {
          if (response.items.length !== 0) {
              resolve(response.items);
          } else if (prefixes) {
              resolve(response.prefixes);
          } else {
              response.prefixes.map(folder => {
                  return resolve(getFolderItems(ref.child(`/${folder.name}`)));
              });
          }
      })
      .catch(error => {
          reject(error);
      });
  });
};

export const extractHeader = (header) => {
    const extracted = header.name !== undefined ? header.name : header;
    const id = extracted[0];
    const title = /\d/.test(id) ? extracted.slice(1,extracted.length) : extracted;
    const link = title.toLowerCase().replace(/\s/g, '');
    return { id, title, link };
};

// Route details
export const NavigationOptions = [
    { id: 0, title: "Architecture", link: "/architecture"},
    { id: 1, title: "Project Planning", link: "/projectplanning"},
    { id: 2, title: "Requirements", link: "/requirements"},
    { id: 3, title: "Risk Assessment", link: "/riskassessment"},
    { id: 4, title: "Testing", link: "/testing"},
    { id: 5, title: "Implementation", link: "/implementation"},
  ];
