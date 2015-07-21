(function()
{
	angular
		.module('listimage')
		.directive('bigphoto',bigphoto);
function bigphoto(){
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'bigphoto.html',
    link :function(scope,element,attrs, ctrl, transclude){
      scope.show = false;  
      transclude(function(clone) {
        element.append(clone);
      });   
      element.on('click',function(){
        scope.$apply(function(){
          scope.show = !scope.show;
        });
      });
    }
  };
}	
})();