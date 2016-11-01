'use strict';

/**
 * @ngdoc function
 * @name somenoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the somenoteApp
 */
angular.module('somenoteApp')
  .controller('log',['$scope','$http','server','$cookieStore','$cookies','$state',function ($scope,$http,server,$cookieStore,$cookies,$state) {
		var al = eval($cookies.get("username"))
//		var al = $cookies.get("username")
		if(al){
			$scope.updata={
				username:al
			}
		}
		if($cookies.get("password")){
			var username = $cookies.get("username")
			var password = $cookies.get("password")
			var uid = $cookies.get("uid")
			$scope.updata = {
				username:username,
				password:password,
				uid:uid
			}
			$http({
				 url:server+"/users/login",
		          method:"POST",
		          data:$scope.updata
			}).success(function(e){
				$state.go("index")
			})
		}
	    $scope.log=function(){
	        //alert(1)
	        if($scope.checked==true){
		        $http({
		          url:server+"/users/login",
		          method:"POST",
		          data:$scope.updata
		        }).success(function(e){
//		        	$cookieStore.put("username",$scope.updata.username);
//		        	$cookieStore.put("passwrod",$scope.updata.password);
		        	var date=new Date();
		        	date.setDate(date.getDate()+7);
		        	$cookies.put('username',$scope.updata.username,{'expires':date});
		        	$cookies.put('password',$scope.updata.password,{'expires':date});
		        	$cookies.put('uid',e.uid,{'expires':date});
//		        	$cookies.put('uid',$scope.e.uid);
		        	$state.go("index")
		        })
	        }else{
	        	$http({
			        url:server+"/users/login",
			        method:"POST",
			        data:$scope.updata
		        }).success(function(e){
		        	$cookies.put("username",$scope.updata.username);
		        	$cookies.put("passwrod",$scope.updata.password);
		        	$cookies.put('uid',e.uid);
		        	$state.go("index")
		        })
	        }
		}
	}])
