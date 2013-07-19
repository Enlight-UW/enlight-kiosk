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
        {name: 'V1', active: false, disabled: false, x: 415, y: 36},
        {name: 'V2', active: false, disabled: false, x: 326, y: 65},
        {name: 'V3', active: false, disabled: false, x: 238, y: 112},
        {name: 'V4', active: false, disabled: false, x: 164, y: 174},
        {name: 'V5', active: false, disabled: false, x: 108, y: 250},
        {name: 'V6', active: false, disabled: true, x: 65, y: 329},
        {name: 'V7', active: false, disabled: true, x: 48, y: 413},
        {name: 'V8', active: false, disabled: false, x: 46, y: 498},
        {name: 'V9', active: false, disabled: false, x: 71, y: 582},
        {name: 'V10', active: false, disabled: false, x: 109, y: 660},
        {name: 'VC', active: false, disabled: false, x: 425, y: 645},
        {name: 'VR', active: false, disabled: false, x: 390, y: 590},
        {name: 'H1', active: false, disabled: false, x: 750, y: 224},
        {name: 'H2', active: false, disabled: false, x: 822, y: 264},
        {name: 'H3', active: false, disabled: false, x: 880, y: 305},
        {name: 'H4', active: false, disabled: false, x: 930, y: 349},
        {name: 'H5', active: false, disabled: false, x: 958, y: 408},
        {name: 'H6', active: false, disabled: false, x: 942, y: 468},
        {name: 'H7', active: false, disabled: false, x: 880, y: 512},
        {name: 'H8', active: false, disabled: false, x: 800, y: 528},
        {name: 'H9', active: true, disabled: false, x: 712, y: 530},
        {name: 'H10', active: true, disabled: false, x: 614, y: 524},
        {name: 'HC', active: false, disabled: false, x: 490, y: 295},
        {name: 'HR', active: false, disabled: false, x: 430, y: 340}
    ];

    /**
     * Determines if a valve should use the idle class or enabled class.
     * @param {type} valve
     */
    $scope.computeValveClass = function(valve) {
        return (valve.active ? 'active' : 'idle');
    }
    
    /**
     * Tied to the style directive, mostly used for hiding valves when they
     * become disabled, since we don't have a specific class for that.
     * 
     * @param {type} valve
     * @returns {String}
     */
    $scope.computeValveStyle = function(valve) {
        return (valve.disabled ? 'display: none;' : '');
    }

    $scope.toggle = function(someBoolean) {
       someBoolean = !someBoolean;
    }
}

app.controller('KioskController', kioskController);