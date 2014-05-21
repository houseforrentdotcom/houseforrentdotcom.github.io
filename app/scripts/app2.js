'use strict';

angular
  .module('homeForRentApp2', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tabs2/house.html',
        controller: 'MainCtrl'
      })
      .when('/rates', {
        templateUrl: 'views/tabs2/rates.html',
        controller: 'RatesController'
      })
      .when('/nearby', {
        templateUrl: 'views/tabs2/nearby.html',
        controller: 'MainCtrl'
      })
      .when('/travel', {
        templateUrl: 'views/tabs2/directions.html',
        controller: 'MainCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/tabs2/gallery.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/tabs2/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
