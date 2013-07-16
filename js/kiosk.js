/*
 * kiosk.js
 * @author Alex Kersten
 * 
 * Defines behavior for the kiosk app.
 */

var app = angular.module('kioskApp', []);


var kioskController = function KioskController($scope) {  
    $scope.valves = [
        {name:'V1', active:false, disabled:false, x: .1, y: .1,},
        {name:'V2', active:false, disabled:false, x: .2, y: .2},
        {name:'V3', active:false, disabled:false, x: .2, y: .2},
        {name:'V4', active:false, disabled:false, x: .2, y: .2},
        {name:'V5', active:false, disabled:false, x: .2, y: .2},
        {name:'V6', active:false, disabled:false, x: .2, y: .2},
        {name:'V7', active:false, disabled:false, x: .2, y: .2},
        {name:'V8', active:false, disabled:false, x: .2, y: .2},
        {name:'V9', active:false, disabled:false, x: .2, y: .2},
        {name:'V10', active:false, disabled:false, x: .2, y: .2}, 
        {name:'VC', active:false, disabled:false, x: .2, y: .2},
        {name:'VR', active:false, disabled:false, x: .2, y: .2},
        
        {name:'H1', active:false, disabled:false, x: .2, y: .2},
        {name:'H2', active:false, disabled:false, x: .2, y: .2},
        {name:'H3', active:false, disabled:false, x: .2, y: .2},
        {name:'H4', active:false, disabled:false, x: .2, y: .2},
        {name:'H5', active:false, disabled:false, x: .2, y: .2},
        {name:'H6', active:false, disabled:false, x: .2, y: .2},
        {name:'H7', active:false, disabled:false, x: .2, y: .2},
        {name:'H8', active:false, disabled:false, x: .2, y: .2},
        {name:'H9', active:false, disabled:false, x: .2, y: .2},
        {name:'H10', active:false, disabled:false, x: .2, y: .2},
        {name:'HC', active:false, disabled:false, x: .2, y: .2},
        {name:'HR', active:false, disabled:false, x: .2, y: .2}        
    ];
}

app.controller('KioskController', kioskController);