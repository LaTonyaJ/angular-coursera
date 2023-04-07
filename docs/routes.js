(() => {
    'use strict'

    angular.module('MenuApp', ['ui.router']);

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: '/templates/categories.template.html',
            controller: 'categoriesController as cat',
            resolve: {
                items: ['MenuDataService', (MenuDataService) => {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{short_name}',
            templateUrl: '/templates/items.template.html',
            controller: 'itemsController as itemsCtrl',
            resolve: {
                item: ['MenuDataService', 
                        '$stateParams', 
                        (MenuDataService, $stateParams) => {
                            return MenuDataService.getItemsForCategory($stateParams.short_name);
                }]
            }
        })
    };
})()