var app = angular.module('myapp',[ 'ngRoute','ngResource','GeekStreet.services' ]);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/contact',
				{
					templateUrl: 'template/contact.html'
		}).when('/home',
				{
					templateUrl: 'home.html'
		}).when('/product/:productId',
				{
					templateUrl: 'template/product.html',
					controller:'ProductCtrl'
		}).when('/productlist',
				{
					templateUrl: 'template/productlist.html',
					controller:'ProductlistCtrl'
		}).when('/search=:searchData',
				{
					templateUrl: 'template/search.html',
					controller:'SearchCtrl'
		}).otherwise({ redirectTo: '/home'});
});