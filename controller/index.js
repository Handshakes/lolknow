'use strict';

var leagueAppControllers = angular.module('leagueAppControllers', []);

leagueAppControllers.controller('IndexCtrl', function($scope) {
	$http.get('../model/champions.json').success(function(data) {
		$scope.champs = data;
	});
});