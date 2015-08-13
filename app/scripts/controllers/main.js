'use strict';

/**
 * @ngdoc function
 * @name componentLibrary.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the componentLibrary
 */
angular.module('componentLibrary')
  .controller('MainCtrl', function($scope, $timeout){
    var statusClasses = ['inactive', 'onFocus', 'onBlur'];
    var activeColor = 0;
    $scope.modelStatus = function() {
        return (statusClasses[activeColor]);
    };
    $scope.focusCallback = function() {
        activeColor = 1;
    };
    $scope.blurCallback = function() {
        activeColor = 2;
        $timeout(function() {activeColor = 0;}, 2000);
    };
  });
