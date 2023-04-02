(function() {
    'use strict';

    angular.module("LunchCheck", [])

    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    
    function LunchController($scope){
        $scope.lunch_order = [];

        $scope.check = function (){
            var order = ($scope.lunch_order.split(','));
            var numBlanks = checkForBlanks(order);
            var items = order.length - numBlanks;
            console.log("Items:" + items)
            compare(order, items);
        };

        function compare(order, length){
            // console.log(order.length)
            if(order == ""){
                $scope.msg = "Please enter data first "
            }
            else if (length <= 3){
                $scope.msg = "Enjoy!"
            }else{
                $scope.msg = "Too Much!"
            }
        }

        function checkForBlanks(order){
            console.log(order)
            var count = 0
            for (let i = 0; i < order.length; i++){
                if (order[i] === " " || order[i] === ""){
                    count += 1;
                }
            }
            return count
        }
    }
})();