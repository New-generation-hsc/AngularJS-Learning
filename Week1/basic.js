(function(){
"use strict";

angular.module("myFirstApp", [])
.controller("myFirstController", function ($scope){
    $scope.name = "Yaako";
    $scope.sayHello = function (){
        return "Hello AngularJS";
    }
});

})();
