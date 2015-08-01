/* use strict */
var app = angular.module("isolateApp", []);

app.controller("AppCtrl", function ($scope, $element)
{
	$scope.getMove = function (name, movetype, move)
	{
		console.log('' + name + ' performed a ' + movetype +
			' ' + move );
	}

	$scope.movetypes 	= ['Finisher', 'Offensive Move', 'Defensive Move'];
	$scope.movetype 	= $scope.movetypes[0];
})

.directive("character", function ()
{
	return { // here is where you will see the isolate scope
		restrict: 'E',
		scope: { //these curly braces are the isolate scope
			name: "@", //this tells this doc that we are passing in the data from the html file
			image: "@", 
			movetype: "=", //
			useMove: '&'
		},
		templateUrl: 'partials/theshield.html', //this is getting your template data from a file not inline.
		controller: 'AppCtrl'
	}
})