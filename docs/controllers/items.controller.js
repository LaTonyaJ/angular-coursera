(() => {
    'use strict';

    angular.module('MenuApp')

    .controller('itemsController', ItemsController);

    function ItemsController(item){
        var ctrl = this;

        ctrl.items = item.data.menu_items;

        console.log(ctrl.items)
        for(var key in ctrl.items){
            console.log(key, ctrl.items[key])
        }
    };
    ItemsController.$inject = ['item'];

})();