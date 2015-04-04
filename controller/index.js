'use strict';

var leagueAppControllers = angular.module('leagueAppControllers', []);

leagueAppControllers.controller('IndexCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('../model/champions.json').success(function(data) {
			$scope.champs = data;
		});
}]);