angular.module('app.ui.timer')
.controller('TimerCtrl', ['$scope','TimerService', function($scope, TimerService) {
  $scope.counter = 0;
	
  $scope.timeCollection = [];

  $scope.getUserTime = function(query) {
  	$scope.timeCollection.push(TimerService.createTimer(query));
  	$scope.timevalue = '';
  	$scope.counter++;
  }

  $scope.deleteTimer = function(index){
  	 $scope.timeCollection.splice(index, 1);
  }

  $scope.$on('timer-start', function () {
    $scope.start();
  });

  $scope.$on('timer-resume', function () {
     $scope.resume();
   });

  $scope.$on('timer-stop', function () {
     $scope.stop();
   });
}]);
