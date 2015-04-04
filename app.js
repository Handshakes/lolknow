var leagueApp = angular.module('leagueApp', [
	'ngRoute',
	'leagueAppControllers'
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