app.controller('SearchBarCtrl', ['$scope','$location', function($scope,$location){
	search = function(){
		$location.path('/search='+$scope.searchData);
	};
	$scope.$watch('searchData',function(){
		if($scope.searchData!=undefined)
			search();
	});
}])
.controller('ProductCtrl', ['$scope','$route','Product', function($scope,$route,Product){
	$scope.product=Product().take($route.current.params.productId);
}])
.controller('ProductlistCtrl', ['$scope','$route','ProductsService', function($scope,$route,ProductsService){
	$scope.product_list=ProductsService().query();
}])
.controller('SearchCtrl', ['$scope','$route','SearchService',function($scope,$route,SearchService){
	$scope.searchResults=SearchService().get_search_result();
	$scope.searchData=$route.current.params.searchData;
}])