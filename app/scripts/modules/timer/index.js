angular.module('app.ui.timer', [])
  .config(function($stateProvider) {
  $stateProvider
    .state('timer', {
      url: '/view2',
      templateUrl: '/app/scripts/modules/timer/views/timer-view.html',
      controller: 'TimerCtrl'
    })
});
