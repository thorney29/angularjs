(function (Service, undefined)
{
	mapApp.Modules.mapApp.service("Service", ['$http', '$q', function ($http, $q)
	{
		var deferred = $q.defer();

		$http.get('bars.json').then(function (data)
		{
			deferred.resolve(data);
		});
		this.getPhases = function ()
		{
			return deferred.promise;
		}
	}]);
}(mapApp.Service = mapApp.Service || {} ));