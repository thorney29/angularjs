/* use strict */

// var app = angular.module("RavensApp", []);
// app.service("ravensService", function ($http, $q)
// {
// 	var deferred = $q.defer();
// 	$http.get('resources/json/BaltimoreRavens.json').then(function (data)
// 	{
// 		deferred.resolve(data);
// 	});

// 	this.getPlayers = function ()
// 	{
// 		return deferred.promise;
// 	}
// })

// .controller("ravensCtrl", function ($scope, ravensService)
// {
// 	var promise = ravensService.getPlayers();
// 	promise.then(function (data)
// 	{
// 		$scope.players = data.data;
// 	});
// })

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