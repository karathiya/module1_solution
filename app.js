(function(){
  'use strict';

  angular.module('lunchChecker', [])

  .controller('lunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope', '$filter'];

  function lunchCheckerController($scope, $filter) {
    $scope.items= "";
    $scope.numberOfItems= 0;
    $scope.status="";

    $scope.checkValue = function(){
      $scope.showEnjoyDiv = false;
      $scope.showTooMuchDiv = false;
      $scope.showEmptyDiv = false;
      console.log("Inside checkValue");
      var numberOfItems = countNumberOfItems($scope.items);
      var status = setStatus(numberOfItems);

      return true;
    };

    function countNumberOfItems(string) {
      var itemsEntered = [];
      var numberOfItems = 0;
      itemsEntered = string.split(',');
      for(var i =0; i<itemsEntered.length;i++){
          if(!(itemsEntered[i].trim() === "" || itemsEntered[i].trim() === " " || itemsEntered[i].trim() === null)) {
              numberOfItems += 1;
          }
      }
      console.log("Number of Items entered:" +numberOfItems);
      return numberOfItems;
    }
    function setStatus(numberOfItems) {
      var status = "";
      if(numberOfItems!=0) {
        if(numberOfItems<=3) {
          status="OK";
          $scope.showEnjoyDiv = true;
          console.log("Lunch Item Value Validation Status: OK");
        }
        else if (numberOfItems>3) {
          status="maxlength";
          $scope.showTooMuchDiv = true;
          console.log("Lunch Item Value Validation Status: Max Check Triggered");
        }
      }
      else {
        status = "required";
        $scope.showEmptyDiv = true;
        console.log("Lunch Item Value Validation Status: Empty Check Triggered");
      }
      return status;
    }
  }
})();
