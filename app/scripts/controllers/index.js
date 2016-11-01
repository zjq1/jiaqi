'use strict';

/**
 * @ngdoc function
 * @name somenoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the somenoteApp
 */
angular.module('somenoteApp')
	.controller('index', ['$scope', '$http', 'server', '$state', '$cookieStore', '$cookies', '$timeout','$stateParams', function($scope, $http, server, $state, $cookieStore, $cookies, $timeout,$stateParams) {
		var uid=$cookies.get('uid')
//		$scope.time=String(new Date())
//		$scope.time1=splice.$scope.time(0,0,20)
		$scope.btn = function() {
			if($scope.a == true) {
				$scope.a = false
			} else {
				$scope.a = true
			}
		}
		$http({
			url: server + "/item",
			method: "GET",
			withCredentials:true,
			params:{"uid":uid}
		}).success(function(e) {
//			console.log($scope.data)
			$scope.data = e
		});
		$scope.add=function(){
			console.log($scope.updata)
			$http({
				url: server + "/item",
				method: "POST",
				data:$scope.updata,
			}).success(function(e) {
//				$state.go('index')
				$scope.data2 = e
			});
		}
		$scope.del=function(e){
			$http({
				url: server + "/item/" + e.id,
				method: "DELETE"
				//data:$scope.x
			}).success(function(e) {
				$state.go("index");
				$scope.data.splice($scope.data.indexOf(e), 1)
			})
		}
//		$scope.tj = function() {
//			$http({
//				url: server + "/item",
//				method: "POST",
//				data: $scope.updata
//			}).success(function(e) {
////				debugger
//				$scope.data2.push($scope.updata)
//				$state.go("c")
//			})
//		}
//		$scope.del = function(e) {
//			$http({
//				url: server + "/item/" + e.id,
//				method: "DELETE",
//				//data:$scope.x
//			}).success(function(e) {
//				$scope.data2.splice($scope.data2.indexOf(e), 1)
//				$state.go("c");
//			})
//		}
//		$scope.xx = $stateParams
//		$scope.bj = function() {
//			$http({
//				url: server + "/item",
//				method: "PUT",
//				data: $scope.xx
//			}).success(function(e) {
//				debugger;
//				$scope.data2.push($scope.xx)
//				$state.go("c");
//			})
//		}
	$scope.out = function(){
		$cookies.remove('uid');
		$cookies.remove('username');
		$cookies.remove('password');
		$state.go("log")
	}
	
	
	
	}])