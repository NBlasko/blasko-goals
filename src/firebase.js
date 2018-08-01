import * as firebase from 'firebase';
  var config = {
    apiKey: xxxxxxxxxxxxxxxxxxxxxxxxxx,
    authDomain: xxxxxxxxxxxxxxxx,
    databaseURL: xxxxxxxxxxxx,
    projectId: xxxxxxxxxxxxx,
    storageBucket: xxxxxxxxxx,
    messagingSenderId: xxxxxxxxxxxx
  };

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
  export const goalRemoveRef = firebase.database().ref('finishedGoals');



 