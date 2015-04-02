var leagueApp = angular.module('leagueApp', [
	'ngRoute',
	'IndexCtrl'
]);

leagueApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/index', {
				templateUrl: 'partials/champList.html',
				controller: 'IndexCtrl'
			}).
			otherwise({
				redirectTo: '/index'
			});
	}]);