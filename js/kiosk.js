/*
 * kiosk.js
 * @author Alex Kersten
 * 
 * Defines behavior for the kiosk app.
 */

var app = angular.module('kioskApp', []);


var kioskController = function KioskController($scope) {
    //Size of the background image for use in percentage-wise CSS calculations.
    $scope.bgWidth = 1024;
    $scope.bgHeight = 768;
    
    //The (x,y) pair dictates the center point at which the valve should appear.
    $scope.valves = [
        {name: 'V1', active: false, disabled: false, x: 415, y: 36, class: 'idle'},
        {name: 'V2', active: false, disabled: false, x: 326, y: 65, class: 'idle'},
        {name: 'V3', active: false, disabled: false, x: 238, y: 112, class: 'idle'},
        {name: 'V4', active: false, disabled: false, x: 164, y: 174, class: 'idle'},
        {name: 'V5', active: false, disabled: false, x: 108, y: 250, class: 'idle'},
        {name: 'V6', active: false, disabled: false, x: 65, y: 329, class: 'idle'},
        {name: 'V7', active: false, disabled: false, x: 48, y: 413, class: 'idle'},
        {name: 'V8', active: false, disabled: false, x: 46, y: 498, class: 'idle'},
        {name: 'V9', active: false, disabled: false, x: 71, y: 582, class: 'idle'},
        {name: 'V10', active: false, disabled: false, x: 109, y: 660, class: 'idle'},
        {name: 'VC', active: false, disabled: false, x: 425, y: 645, class: 'idle'},
        {name: 'VR', active: false, disabled: false, x: 390, y: 590, class: 'idle'},
        {name: 'H1', active: false, disabled: false, x: 750, y: 224, class: 'idle'},
        {name: 'H2', active: false, disabled: false, x: 822, y: 264, class: 'idle'},
        {name: 'H3', active: false, disabled: false, x: 880, y: 305, class: 'idle'},
        {name: 'H4', active: false, disabled: false, x: 930, y: 349, class: 'idle'},
        {name: 'H5', active: false, disabled: false, x: 958, y: 408, class: 'idle'},
        {name: 'H6', active: false, disabled: false, x: 942, y: 468, class: 'idle'},
        {name: 'H7', active: false, disabled: false, x: 880, y: 512, class: 'idle'},
        {name: 'H8', active: false, disabled: false, x: 800, y: 528, class: 'idle'},
        {name: 'H9', active: false, disabled: false, x: 712, y: 530, class: 'idle'},
        {name: 'H10', active: false, disabled: false, x: 614, y: 524, class: 'idle'},
        {name: 'HC', active: false, disabled: false, x: 490, y: 295, class: 'idle'},
        {name: 'HR', active: false, disabled: false, x: 430, y: 340, class: 'idle'}
    ];

    $scope.getValveByName = function(name) {

    }
}

app.controller('KioskController', kioskController);