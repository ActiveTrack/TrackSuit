import angular from 'angular';
import Chart from 'chart.js/src/chart.js';
import chartjs from 'angular-chart.js'

angular.module('ctrlsModule', [chartjs])
//this should really be an 'example donut controller'
  .controller("homeCtrl", function($scope){
    $scope.exampleDonutOptions = { legend: { display: true } };
    $scope.exampleDonutLabels =["Sleeping", "Coding", "Exercising", "Partying", "Relaxing"];
    $scope.exampleDonutData = [40, 10, 10, 20, 20];
  })

       