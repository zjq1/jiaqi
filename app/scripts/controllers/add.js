'use strict';

/**
 * @ngdoc function
 * @name somenoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the somenoteApp
 */
angular.module('somenoteApp')
	.controller('add', ['$scope', '$http', 'server', '$state', '$cookieStore', '$cookies', '$timeout','$stateParams', function($scope, $http, server, $state, $cookieStore, $cookies, $timeout,$stateParams) {
		var uid=$cookies.get("uid")
		$scope.updata={
			uid:uid
		}
		$scope.add=function(){
//			console.log($scope.updata)
			$http({
				url: server + "/item",
				method: "POST",
				data:$scope.updata
			}).success(function(e) {
				$state.go('index')
//				$scope.data2 = e
			});
		}
	}])