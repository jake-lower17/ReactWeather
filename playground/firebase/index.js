import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBYmSp8p_ZwRDvCSk-C3DUHwuspQn8ITGc',
  authDomain: 'ow-app-3f4bb.firebaseapp.com',
  databaseURL: 'https://ow-app-3f4bb.firebaseio.com',
  storageBucket: 'ow-app-3f4bb.appspot.com',
  messagingSenderId: '96962695775',
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0',
  },
  isRunning: true,
  user: {
    name: 'Jake',
    age: 27,
  },
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New Todo Added ', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
