(function (){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyItem = this;

        buyItem.items = ShoppingListCheckOffService.getItems();
        buyItem.buy = function (idx) {
            ShoppingListCheckOffService.purchase(idx);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var bought = this;

        bought.items = ShoppingListCheckOffService.boughtAlready();

    };

    function ShoppingListCheckOffService(){
        var service = this;

        var buy_list = [
            {name: "Cookies", quantity: 5},
            {name: "Milk", quantity: 1 },
            {name: "Chips", quantity: 10},
            {name: "Bottled Water", quantity: 32},
            {name: "Apples", quantity: 6}
        ];
        var bought_list = [];

        service.purchase = function (idx) {
            var item = buy_list.splice(idx, 1);
            bought_list.push(...item);
        };

        service.getItems = function() {
            return buy_list;
        }

        service.boughtAlready = function () {
            return bought_list;
        }
    };

})();