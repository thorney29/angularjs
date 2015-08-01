/* use strict */
var app = angular.module('MyApp', []);
app.controller("MainCtrl", function ($scope)
{
	$scope.data = {
		label: "Click for a different view."
	};
});