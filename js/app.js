var app = angular.module('myapp',[ 'ngRoute','ngResource' ]);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/contact',
				{
					templateUrl: 'template/contact.html'
		}).when('/view2',
				{
					templateUrl: 'view2.html'
		}).when('/product/:productId',
				{
					templateUrl: 'template/products.html',
					controller:'ProductCtrl'
		}).when('/search=:searchData',
				{
					templateUrl: 'template/search.html',
					controller:'SearchCtrl'
		}).otherwise({ redirectTo: '/view2'});
});