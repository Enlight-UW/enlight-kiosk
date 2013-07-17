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
        {name: 'V1', active: false, disabled: false, x: 415, y: 36, class: 'btn'},
        {name: 'V2', active: false, disabled: false, x: 326, y: 65, class: 'btn'},
        {name: 'V3', active: false, disabled: false, x: 238, y: 112, class: 'btn'},
        {name: 'V4', active: false, disabled: false, x: 164, y: 174, class: 'btn'},
        {name: 'V5', active: false, disabled: false, x: 108, y: 250, class: 'btn'},
        {name: 'V6', active: false, disabled: false, x: 65, y: 329, class: 'btn'},
        {name: 'V7', active: false, disabled: false, x: 48, y: 413, class: 'btn'},
        {name: 'V8', active: false, disabled: false, x: 46, y: 498, class: 'btn'},
        {name: 'V9', active: false, disabled: false, x: 71, y: 582, class: 'btn'},
        {name: 'V10', active: false, disabled: false, x: 109, y: 660, class: 'btn'},
        {name: 'VC', active: false, disabled: false, x: 425, y: 645, class: 'btn'},
        {name: 'VR', active: false, disabled: false, x: 390, y: 590, class: 'btn'},
        {name: 'H1', active: false, disabled: false, x: 750, y: 224, class: 'btn'},
        {name: 'H2', active: false, disabled: false, x: 822, y: 264, class: 'btn'},
        {name: 'H3', active: false, disabled: false, x: 880, y: 305, class: 'btn'},
        {name: 'H4', active: false, disabled: false, x: 930, y: 349, class: 'btn'},
        {name: 'H5', active: false, disabled: false, x: 958, y: 408, class: 'btn'},
        {name: 'H6', active: false, disabled: false, x: 942, y: 468, class: 'btn'},
        {name: 'H7', active: false, disabled: false, x: 880, y: 512, class: 'btn'},
        {name: 'H8', active: false, disabled: false, x: 800, y: 528, class: 'btn'},
        {name: 'H9', active: false, disabled: false, x: 712, y: 530, class: 'btn'},
        {name: 'H10', active: false, disabled: false, x: 614, y: 524, class: 'btn'},
        {name: 'HC', active: false, disabled: false, x: 480, y: 295, class: 'btn'},
        {name: 'HR', active: false, disabled: false, x: 430, y: 340, class: 'btn'}
    ];

    $scope.getValveByName = function(name) {

    }
}

app.controller('KioskController', kioskController);