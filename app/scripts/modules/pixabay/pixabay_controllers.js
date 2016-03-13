angular.module('app.pixabay')
.controller('PixabayCtrl', ['$scope', 'PixabayAPI' ,function($scope, PixabayAPI) {
  $scope.pixabayAPI = {};
  $scope.doSearch = function(query) {
  	$scope.search = '';
    PixabayAPI.getPixabayPhotos(query)
    .then(function(data) {
      $scope.pixabayAPI.photos = data;
    });
  };
  $scope.doSearch('yellow flower');
}]);