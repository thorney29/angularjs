/* use strict */
var app = angular.module('MyApp', []);

app.directive('walterwhite', function ()
{
	return {
		restrict: 'E',
		//this defines how the template below is summoned on the page -- attribute, element, or class
		transcude: true, // this means that anytime this is updated it will update itself
		template: '<h2>I am Heisenberg</h2>' // this is what will be displayed according to this directive
		// {
		// 	console.log('I am an attribute');
		// }
	}
})

.directive('restriction', function ()
{
	return {
		restrict: 'A',
		link: function ()
		{
			console.log('I am an attribute');
		}
	}
})
.directive('elementrest', function ()
{
	return {
		restrict: 'E',
		link: function ()
		{
			console.log('I am an element');
		}
	}
})

.directive('classrest', function ()
{
	return {
		restrict: 'C',
		link: function ()
		{
			console.log('I am a class');
		}
	}
})

.directive('commentsrest', function ()
{
	return {
		restrict: 'M',
		link: function ()
		{
			console.log('I am a comment restriction');
		}
	}
})

.controller('ShieldCtrl', function ($scope) // THis sets up the shieldnames array
{
	$scope.shieldNames = []; //this array, which is storing the added names, is put into scope so the directive can read the data outside of the controller.

	this.addReigns = function ()
	{
		$scope.shieldNames.push("Roman Reigns: Juggernaut"); //adding each name into an array
	};

	this.addRollins = function ()
	{
		$scope.shieldNames.push("Seth Rollins: Architect"); // this one is added  to array after Reigns
	};

	this.addAmbrose = function ()
	{
		$scope.shieldNames.push("Dean Ambrose: Lunatic Fringe"); // this one is added  to array after Rollins
	};
})

.directive('theshield', function () //this is the element directive that relies on the ShieldCtrl to pass on the array of names in as attributes 
	//and binding a mouseover effect to the element to show the names
{
	return {
		restrict: 'E',
		scope: {}, // This protects the scope of the items the action is happening on. Each mouseover is contained to its element
		controller: 'ShieldCtrl',
		link: function (scope, element, attrs) //these are always added
		{
			element.bind('mouseenter', function ()
			{
				console.log(scope.shieldNames);
			});
		}
	}
})

.directive('reigns', function () // This attribute is nested inside the theshield element and uses the sscope of the ShieldCtrl and theshield directive above
{
	return {
		require: 'theshield', 
		link: function (scope, element, attrs, ShieldCtrl)
		{
			ShieldCtrl.addReigns();
		}
	}
})

.directive('rollins', function ()
{
	return {
		require: 'theshield',
		link: function (scope, element, attrs, ShieldCtrl)
		{
			ShieldCtrl.addRollins();
		}
	}
})

.directive('ambrose', function ()
{
	return {
		require: 'theshield',
		link: function (scope, element, attrs, ShieldCtrl)
		{
			ShieldCtrl.addAmbrose();
		}
	}
})

.directive('interactiveBtn', function ()
{
	return {
		restrict: 'E',
		link: function (scope, element, attrs)
		{
			element.bind('mouseenter', function ()
			{
				element[0].innerText = "  Go Green! ";
			});

			element.bind('mouseleave', function ()
			{
				element[0].innerText = " Go Blue! ";
			});
		}
	}
})

.directive('walterwhite', function () 
{
	return {
		restrict: 'E',
		transclude: true,
		link: function (scope, element, attrs)
		{
			console.log(scope);
			console.log(element);
			console.log(attrs);
		}
	}
	/*return {
		restrict: 'E',
		transclude: true,
		template: '<h2>I am Heisenberg</h2>'
	}*/
})

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