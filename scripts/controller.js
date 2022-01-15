var app = angular.module('MyCollagesite', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'home.html'
    })
    .when('/place order',{
        templateUrl: 'shop.html'
    })
    
    .otherwise({
        redirectTo: '/home'
    });
});