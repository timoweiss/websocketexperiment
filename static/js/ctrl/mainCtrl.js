angular.module('websocketexperiment').controller('MainCtrl', function($scope, socketService) {
    var opt = {
        url: 'http://192.168.178.86:3000'
    };
    socket = socketService;
    socket.on('newmobileclient', function() {
        console.log('new newmobileclient');

    });

    socket.on('connect', function(data) {
        $scope.socketConnected = true;

    });
    socket.on('test', function(result) {
        //console.log('new data', result);
        $scope.result = result;
        var rgba = 'rgba(' + Math.abs(Math.round(result.x * 10)) + ',' + Math.abs(Math.round(result.y * 10)) + ',' + Math.abs(Math.round(result.z * 10)) + ',' + 0.9 + ')';
        $scope.background = {
            'background-color': rgba
        };
    });
});
