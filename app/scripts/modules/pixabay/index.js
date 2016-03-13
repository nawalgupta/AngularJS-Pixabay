angular.module('app.pixabay', [])
.provider('PixabayAPI', function() {
  var apiKey = "";
  this.setApiKey = function(key) {
    if (key) this.apiKey = key;
  };
  this.getUrl = function(query) {
	return "https://pixabay.com/api/?key=" + 
	  this.apiKey + "&q=" + encodeURIComponent(query) + "&image_type=photo"
  };
  this.$get = function($q, $http) {
	var self = this;
	  return {
	    getPixabayPhotos: function(search) {
	      var d = $q.defer();
	      $http({
	        method: 'GET',
	        url: self.getUrl(search),
	        cache: true
	      }).success(function(data) {
	        d.resolve(data);
	      }).error(function(err) {
	        d.reject(err);
	      });
	      return d.promise;
	    }
	  }
    }
})
.config(function($stateProvider) {
  $stateProvider
    .state('pixabay', {
      url: '/view1',
      controller: 'PixabayCtrl',
      templateUrl: '/app/scripts/modules/pixabay/views/pixabay.html'
    })
})
.config(function(PixabayAPIProvider) {
  PixabayAPIProvider.setApiKey('1754280-1f25f3c00f046f791e93d656b');
});
