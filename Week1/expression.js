(function () {
"use strict";

angular.module("MsgApp", [])

.controller("MsgController", MsgController);

MsgController.$inject = ["$scope"];
function MsgController($scope) {
    $scope.imgName = "adler";

    var img_num = 0;

    $scope.feedback = function (){
        img_num ++;
        console.log(img_num);

        chooseImage(img_num % 3)
    }

    function chooseImage(img_num){
        switch (img_num) {
            case 0:
                $scope.imgName = "adler";
                break;
            case 1:
                $scope.imgName = "avenue";
                break;
            case 2:
                console.log(img_num);
                $scope.imgName = "child";
                break;
            default:
                break;
        }
    }
}
})();
