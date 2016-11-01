'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */
angular
  .module('somenoteApp', ["ui.router","ngCookies"]).constant('server','http://www.somenote.cn:1510').controller('log',['$scope','$http','server','$cookieStore',function ($scope,$http,server,$cookieStore) {

	}]).controller('sign',['$scope','$http','server','$cookieStore',function ($scope,$http,server,$cookieStore) {

	}]).controller('index',['$scope','$http','server','$cookieStore','$interval',function ($scope,$http,server,$cookieStore,$interval) {

	}]).controller('add',['$scope','$http','server','$cookieStore','$interval',function ($scope,$http,server,$cookieStore,$interval) {

	}]).controller('more',['$scope','$http','server','$cookieStore','$interval',function ($scope,$http,server,$cookieStore,$interval) {

	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when('','/log')
			$stateProvider.state('log',{
				url:'/log',
				views:{
					'biggest':{
						templateUrl:'views/log.html',
						controller:'log'
					}
				}
			}).state('sign',{
				url:'/sign',
				views:{
					'biggest':{
						templateUrl:'views/sign.html',
						controller:'sign'
					}
				}
			}).state('index',{
				url:'/index',
				views:{
					'biggest':{
						templateUrl:'views/index.html',
						controller:'index'
					}
				}
			}).state('add',{
				url:'/add',
				views:{
					'biggest':{
						templateUrl:'views/add.html',
						controller:'add'
					}
				}
			}).state('more',{
				url:'/more?id&title&content',
				views:{
					'biggest':{
						templateUrl:'views/more.html',
						controller:'more'
					}
				}
			})
		}])
