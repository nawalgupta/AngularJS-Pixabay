angular.module('app.pixabay')
.filter('imageformat', function() {
  return function(url) {
  	var uri = "";
  	if(url){
  		uri = url.replace('_640','_180');
  	}
    return uri;
  }
});