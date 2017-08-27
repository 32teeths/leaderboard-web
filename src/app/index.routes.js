angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/feed');

  $stateProvider
    .state('landing', {
      url: '/',
      component: 'landing',
      abstract: true,
    })
    .state('landing.feed', {
      url: 'feed',
      component: 'feed'
    })
    .state('landing.developer', {
      url: 'developer/:userId',
      component: 'developer'
    });

}
