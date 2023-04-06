(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownControllerApp', NarrowItDownControllerApp)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems(){
        var ddo = {
        templateUrl: 'found_items.html',
        scope: {
            itemsFound: "<",
            onRemove: "&"
        }
        };
        return ddo;
    }


    NarrowItDownControllerApp.$inject = ['MenuSearchService', '$scope'];
    function NarrowItDownControllerApp(MenuSearchService, $scope){
        var narrow = this;
        var unfiltered = [];
        var items = [];

        
        narrow.searchMenu = function () {
            MenuSearchService.getMatchedMenuItems($scope.search)

            .then((response) => {
            for (const key in response.data){
                unfiltered.push(response.data[key].menu_items)
            };
                        
            for (let i = 0; i < unfiltered.length; i++){
                for(let j = 0; j < unfiltered[i].length; j++){
                    if(unfiltered[i][j].description.includes($scope.search)){
                        var item = {
                            name: unfiltered[i][j].name,
                            short_name: unfiltered[i][j].short_name,
                            desc: unfiltered[i][j].description
                        }
                        items.push(item)
                    };
                }
            }

                narrow.found = items;
                console.log(narrow.found)
            })
            .catch((error) =>{
                console.log('error: ' + error)
            })
        }

        narrow.remove = function ($index) {
            narrow.found.splice($index, 1);
        }

    };


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var search = this;
        
        search.getMatchedMenuItems = function () {
            var resp = $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            });

            return resp; 
        }
    }
})();