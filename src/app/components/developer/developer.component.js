angular
    .module('app')

    .component('developer', {
        templateUrl: 'app/components/developer/developer.html',
        controller: 'DeveloperController',
        controllerAs: 'developer'
    })
    .controller('DeveloperController', function ($firebaseObject) {

    
    });