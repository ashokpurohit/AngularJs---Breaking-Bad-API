var app = angular.module("BBApp",[]);


app.controller("BBCtrl",function($scope, $http){
    $http.get("https://www.breakingbadapi.com/api/characters")
        .then(res => {
            $scope.characters = res.data;
        })
})