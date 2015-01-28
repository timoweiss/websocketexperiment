'use strict';
angular.module('websocketexperiment').controller('MainCtrl', function($scope, socketService) {
    var socket = socketService;
    socket.on('newmobileclient', function() {
        console.log('new newmobileclient');

    });

    socket.on('connect', function(data) {
        $scope.socketConnected = true;

    });
    socket.on('test', function(result) {
        $scope.result = result;

        //setRgbaString(result);
    });

    function setRgbaString(result) {
        var rgba = 'rgba(' + Math.abs(Math.round(result.x * 10)) + ',' + Math.abs(Math.round(result.y * 10)) + ',' + Math.abs(Math.round(result.z * 10)) + ',' + 0.9 + ')';
        $scope.background = {
            'background-color': rgba
        };
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(3, 2, 0.1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var render = function() {
        requestAnimationFrame(render);

        cube.rotation.x = $scope.result.y / 10 - 45;
        cube.rotation.y = $scope.result.x / 10 * -1;

        renderer.render(scene, camera);
    };

    render();
});
