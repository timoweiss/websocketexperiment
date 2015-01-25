var app = angular.module('websocketexperiment', ['btford.socket-io', 'ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "partials/home.html",
            controller: "MainCtrl"
        });


});

app.factory('socketService', function(socketFactory) {
    console.log('hallo');
    return socketFactory();
});
