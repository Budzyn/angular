(function()
{
'use strict';		

	
function listcontroller(postsfactory){
	var myvar = this;
	myvar.posts = [];
	myvar.posts = postsfactory.Posts.query({userId: '1'});
}	
angular.module('listimage')
	.controller('listcontroller',listcontroller);
	
listcontroller.$inject = ['postsfactory'];
})();