
angular
    .module('app')
    .run(function (firebaseConfig) {

        firebase.initializeApp(firebaseConfig);
    });
