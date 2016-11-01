'use strict';

/**
 * @ngdoc function
 * @name somenoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the somenoteApp
 */
angular.module('somenoteApp')
  .controller('sign',['$scope','$http','server','$state','$cookieStore','$cookies',function ($scope,$http,server,$state,$cookieStore,$cookies) {
	     $scope.sign=function(){
			$http({
				url:server+"/users",
				method:"POST",
				data:$scope.updata
			}).success(function(e){
				$cookieStore.put("username",$scope.updata.username);
				//$cookieStore.put("col",{name:$scope.updata.username;password:$scope.updata.password})
				$state.go("log");
				//$scope.data.push(e)
			})
		}
	}])
