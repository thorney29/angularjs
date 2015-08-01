/* use strict */
var app = angular.module('MyApp', []);
app.controller("MainCtrl", function ($scope)
{
	$scope.data = {
		label: "My Button 2"
	};
});

var app = angular.module('MyApp', []);
app.controller("MainCtrl", function ($scope) 
{
 	$scope.data = {

 		labelInput: "Type in the box to the view you want",
 		labelButton: "View Alternate"
 	}
})