/*
 * kiosk.js
 * @author Alex Kersten
 * 
 * Defines behavior for the kiosk app.
 */

var app = angular.module('kioskApp', []);


var kioskController = function KioskController($scope) {
    //The (x,y) pair dictates the center point at which the valve should appear.
    $scope.valves = [
        {name: 'V1', active: false, disabled: false, x: 36.52, y: 20.83, class: 'btn'},
        {name: 'V2', active: false, disabled: false, x: 31.25, y: 24.48, class: 'btn'},
        {name: 'V3', active: false, disabled: false, x: 26.07, y: 29.43, class: 'btn'},
        {name: 'V4', active: false, disabled: false, x: 22.95, y: 35.29, class: 'btn'},
        {name: 'V5', active: false, disabled: false, x: 21.18, y: 42.84, class: 'btn'},
        {name: 'V6', active: false, disabled: false, x: 20.41, y: 50.26, class: 'btn'},
        {name: 'V7', active: false, disabled: false, x: 19.82, y: 57.68, class: 'btn'},
        {name: 'V8', active: false, disabled: false, x: 21.39, y: 65.10, class: 'btn'},
        {name: 'V9', active: false, disabled: false, x: 24.41, y: 71.22, class: 'btn'},
        {name: 'V10', active: false, disabled: false, x: 26.46, y: 77.21, class: 'btn'},
        {name: 'VC', active: false, disabled: false, x: 41.40, y: 91.02, class: 'btn'},
        {name: 'VR', active: false, disabled: false, x: 36.04, y: 85.03, class: 'btn'},
        {name: 'H1', active: false, disabled: false, x: 62.60, y: 44.01, class: 'btn'},
        {name: 'H2', active: false, disabled: false, x: 67.58, y: 47.27, class: 'btn'},
        {name: 'H3', active: false, disabled: false, x: 71.58, y: 50.65, class: 'btn'},
        {name: 'H4', active: false, disabled: false, x: 74.32, y: 56.64, class: 'btn'},
        {name: 'H5', active: false, disabled: false, x: 73.54, y: 45.61, class: 'btn'},
        {name: 'H6', active: false, disabled: false, x: 71.09, y: 63.28, class: 'btn'},
        {name: 'H7', active: false, disabled: false, x: 74.80, y: 61.72, class: 'btn'},
        {name: 'H8', active: false, disabled: false, x: 71.58, y: 62.24, class: 'btn'},
        {name: 'H9', active: false, disabled: false, x: 67.68, y: 63.93, class: 'btn'},
        {name: 'H10', active: false, disabled: false, x: 58.30, y: 63.15, class: 'btn'},
        {name: 'HC', active: false, disabled: false, x: 47.75, y: 38.15, class: 'btn'},
        {name: 'HR', active: false, disabled: false, x: 42.97, y: 43.88, class: 'btn'}
    ];

    $scope.getValveByName = function(name) {

    }
}

app.controller('KioskController', kioskController);