var app = angular.module('websocketexperiment', ['btford.socket-io']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "partials/home.html",
            controller: "MainCtrl"
        });


});

app.factory('socketService', function(socketFactory) {
    console.log('hallo')
    return socketFactory();
});
