var app = angular.module('MyWork', ['ngRoute']);
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