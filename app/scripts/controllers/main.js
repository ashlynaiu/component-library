'use strict';

/**
 * @ngdoc function
 * @name componentLibrary.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the componentLibrary
 */
angular.module('componentLibrary')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
