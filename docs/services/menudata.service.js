(() => {
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http){
        var service = this;

        service.getAllCategories = function (){
            var resp = $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
            });
            return resp;
        }

        service.getItemsForCategory = function(categoryShortName){
            var API = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json';
            
            var resp = $http({
                method: "GET",
                url: API
            });
            return resp;
        }
    }
})()