(function (Service, undefined)
{
	mapApp.Modules.mapApp.service("service", ['$http', '$q', function ($http, $q)
	{
		var deferred = $q.defer();

		$http.get('bars.json').then(function (data)
		{
			deferred.resolve(data);
		});
		this.getBars = function ()
		{
			return deferred.promise;
		}
	}]);
}(mapApp.Service = mapApp.Service || {} ));