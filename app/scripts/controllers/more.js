'use strict';

/**
 * @ngdoc function
 * @name somenoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the somenoteApp
 */
angular.module('somenoteApp').controller('more', ['$scope', '$http', 'server', '$state', '$cookieStore', '$cookies','$stateParams', function($scope, $http, server, $state, $cookieStore, $cookies,$stateParams) {
		$scope.data1 = $stateParams
		$scope.save=function(){
			$http({
				url:server+'/item',
				method:'PUT',
				data:$scope.data1
			}).success(function(e){
				console.log(e)
				$scope.data1=e
//				$scope.data.push($scope.data1)
				$state.go('index')
			})
		}
	}])
//$(function(){
//	var time=new Date()
//	$('.date').html('time')
//})
