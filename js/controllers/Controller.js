app.controller('SearchBarCtrl', ['$scope','$location', function($scope,$location){
	search = function(){
		$location.path('/search='+$scope.searchData);
	};
	$scope.$watch('searchData',function(){
		if($scope.searchData!=undefined)
			search();
	});
}])
.controller('ProductCtrl', ['$scope','$route', function($scope,$route){
}])
.controller('SearchCtrl', ['$scope','$route', function($scope,$route){
	$scope.searchResults=[
		{'title':'tomato',
		'description':'super'},
		{'title':'tomato',
		'description':'super duper'
		}]
	$scope.searchData=$route.current.params.searchData;
}])