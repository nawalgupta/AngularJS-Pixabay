angular.module('app.ui.timer')
.service('TimerService', function () {
  this.createTimer = function (timevalue) {
    var timeRemaining = Date.parse(timevalue) - Date.parse(new Date()),
        seconds = Math.floor((timevalue * 1000 / 1000) % 60),
        minutes = Math.floor(((timevalue  * 1000 / (1000 * 60)) % 60)),
        hours = Math.floor(((timevalue * 1000 / (1000 * 60 * 60)) % 24));
        return {
          'timeRemaining': timevalue,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    };
});