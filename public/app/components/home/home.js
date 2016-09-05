import angular from 'angular';
import {homeDirective} from './home.directive';
import uiRouter from 'angular-ui-router';
import Chart from 'chart.js/src/chart.js';
import chartjs from 'angular-chart.js'

export const home = angular.module('home', [uiRouter, chartjs])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
})
.directive('home', homeDirective);