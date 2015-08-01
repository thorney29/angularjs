/* use strict */

var app = angular.module("mapApp", []);
app.service("ravensService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('resources/json/bars.json').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getBars = function ()
	{
		return deferred.promise;
	}
})

.controller("mapCtrl", function ($scope, mapService)
{
	var promise = mapService.getBars();
	promise.then(function (data)
	{
		$scope.bars = data.data;
	});
}) 