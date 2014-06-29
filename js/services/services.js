angular.module('GeekStreet.services',[])
.factory('ProductsService',function(){
	return function(){
		return {
			query:function(){
					a=[
						{
						'id':1,
						'title':'tomato',
						'description':'super'
						},
						{
						'id':2,
						'title':'tomato',
						'description':'super duper'
						}
					]
					return a;
				}
			}
	}
})
.factory('Product', function(ProductsService){
	return function(){
		a={take:function(id){
			total=ProductsService().query();
			i=0;
			for(i=0;i<total.length;i++){
				if(total[i].id==id)
					return total[i];
			}
		}
	}
	return a;
};
})
.factory('SearchService',function(ProductsService){
	return function(){
		a={
			get_search_result:function(){return ProductsService().query()}
		}
		return a;
	}
})