(function () {
   'use strict';

   angular.module('myApp.controllers', []).
      controller('helloWorldCtrl', function ($scope, $timeout) {
         $scope.name = { first: "Jane", last: "Doe" };
         $scope.mask = "+38 (999) 999-9999";

         $scope.getModel = function () {
            return JSON.stringify($scope.person, undefined, 2);
         };

         var colors = ["#CCC", "#F77", "#9F9"];
         var activeColor = 0;

         $scope.modelStatus = function () {
            return {
               backgroundColor: colors[activeColor]
            };
         };

         $scope.focusCallback = function () {
            activeColor = 1;
         };

         $scope.blurCallback = function () {
            activeColor = 2;
            $timeout(function () { activeColor = 0; }, 2000);
         };


         $scope.helpKeyDown = function($event) {
            console.log($event);
            $scope.helpText = "Easy. Just enter your name.";
            $timeout(function() { $scope.helpText = "" }, 10000);
         };

         $scope.tooltip = function() {
            if (!$scope.person.hasOwnProperty("phone")) {
               return $scope.person.firstName + " has no phone?"
            }
            else {
               return "All good."
            }
         };
      });
}());
