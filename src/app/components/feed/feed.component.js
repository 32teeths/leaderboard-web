angular
    .module('app')

    .component('feed', {
        templateUrl: 'app/components/feed/feed.html',
        controller: 'FeedController',
        controllerAs: 'feed'
    })
    .controller('FeedController', function ($firebaseArray) {

        var self = this;

        var ref = firebase.database().ref().child("commits");

        self.commits = $firebaseArray(ref);

        console.log(self.commits);

    });