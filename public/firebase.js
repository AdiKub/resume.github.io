export const fireApp = () =>{
  const firebaseConfig = {
    apiKey: "AIzaSyCLj263mInKQjx03QBl4bZbASj63nMt1pA",
    authDomain: "adikubresume.firebaseapp.com",
    databaseURL: "https://adikubresume.firebaseio.com",
    projectId: "adikubresume",
    storageBucket: "adikubresume.appspot.com",
    messagingSenderId: "974811295827",
    appId: "1:974811295827:web:cc3e047bed64ce37d3d6a6"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp({firebaseConfig});
}
 
  const dbRefObject = firebase.database().ref().child('object');
  dbRefObject.on('value', snap=> console.log(snap.val()))
}
