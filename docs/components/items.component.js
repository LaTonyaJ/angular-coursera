(() => {
    'use strict'

    angular.module('MenuApp')
    .component('item', {
        templateUrl: 'items.template.html',
        bindings: {
            catItems: "<"
        }
    });
})()