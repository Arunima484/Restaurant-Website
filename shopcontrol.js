var app = angular.module("online", [])
.controller("onlineController", function($scope,$http){
    $scope.carts=[]; 
    $http({
        method:'GET',
        url:'./model/items.json'
        }).then(function(response){
            $scope.items=response.data;
        });

    $scope.add_cart = function(item){ 
        if(item){ 
            $scope.carts.push({i_id: item.i_id, i_name: item.i_name, i_price: item.i_price}); 
        }	
    }


    $scope.total = 0; 

    $scope.setTotals = function(cart){ 
        if(cart){ 
            $scope.total += cart.i_price; 
        }
    }

    $scope.remove_cart = function(cart){ 
        if(cart){ 
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.i_price; 
        }
    }
    
});