'use strict';

var leagueAppControllers = angular.module('leagueAppControllers', []);

leagueAppControllers.controller('IndexCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('../model/champions.json').success(function(data) {
			$scope.champs = data;
		});
		$http.get('../model/matches1.json').success(function(matchData) {
			$scope.matches = [];
			angular.forEach(matchData.matches, function(value, key) {
				$scope.matches.push(value);
			});
		});
}]);