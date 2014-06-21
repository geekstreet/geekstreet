app.controller('SearchBarCtrl', ['$scope','$location', function($scope,$location){
	$scope.search = function(){
		$location.path('/search='+$scope.searchData);
	};
}])
.controller('ProductCtrl', ['$scope','$route', function($scope,$route){
	alert($route.current.params.productId);
}])
.controller('SearchCtrl', ['$scope','$route', function($scope,$route){
	$scope.searchResults=[
		{'title':'tomato',
		'description':'super'},
		{'title':'tomato',
		'description':'super duper'
		}]
	$scope.searchData=$route.current.params.searchData;
	alert($route.current.params.searchData);
}])