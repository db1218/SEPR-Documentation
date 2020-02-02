
// Firebase config
import firebase from 'firebase/app';
import 'firebase/storage';
import { firebaseConfig } from './firebaseConfig';

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