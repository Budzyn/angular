(function()
{
	angular
		.module('listimage')
		.factory('postsfactory',postsfactory);
	
	postsfactory.$inject = ['$http','$resource'];
	
	function postsfactory($http,$resource){
		var myvar = {
			getPostsByHttp:getPostsByHttp,
			Posts:Posts()
		}
		return myvar;
		
		function getPostsByHttp() {
			 return $http.get('http://jsonplaceholder.typicode.com/posts');
		}
		
		function Posts(){
			return $resource('http://jsonplaceholder.typicode.com/posts');
			
		};
	}
})();