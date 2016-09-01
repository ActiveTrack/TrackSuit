//angular entrypoint

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './home/controllers/HomeCtrl.js'

angular.module('app', [
  uiRouter, 
  'ctrlsModule'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home')
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './home/templates/home.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
      })
  });


