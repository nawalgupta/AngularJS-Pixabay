angular.module('app.ui.timer')
.directive('timer',['TimerService', function($timeout) {
  return {
    restrict: 'AE',
    scope: {
      timevalues: '=',
      removetimer: '&'
    },
    template: '<button class="inline-btn" ng-click="removetimer($index)">X</button><div class="timer-content">' +
              '<div>{{timevalues.hours}} : {{timevalues.minutes}} : {{timevalues.seconds}} ' +
              '<span class="play-btn">&#x25ba;</span><span class="stop-btn">&#x25A9;</span>' +
              '<md-icon md-svg-icon="core:alarm-add"></md-icon></div></div>',
    controller: function($scope){

    },
    link: function(scope, elem, attrs) {
      var stopbtn = angular.element(document.querySelectorAll('.stop-btn'));
      stopbtn.on('click', function() {
         //...
      }); 
    }
  };
}])

