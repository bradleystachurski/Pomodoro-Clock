/**
 * Created by Bradley on 12/27/15.
 */
/**
 * Created by Bradley on 12/10/15.
 */
$(document).ready(function() {

    var $play  = $('.play'),
        $pause = $('.pause'),
        $stop  = $('.stop'),
        $time  = $('.time-input'),
        $timer = $('.timer');

    var timer = new Timer({
        onstart : function(millisec) {
            var sec = Math.round(millisec / 1000);
            $timer.text(sec);
        },
        ontick  : function(millisec) {
            var sec = Math.round(millisec / 1000);
            $timer.text(sec);
        },
        onpause : function() {
            $timer.text('pause');
        },
        onstop  : function() {
            $timer.text('stop');
        },
        onend   : function() {
            $timer.text('end');
            playSoundEnd();
        }
    });

    $play.on('click', function() {
        var time = $time.val();
        if (!time) return;
        if (isNaN(time)) {
            alert('Please input valid number');
            return;
        }

        timer.start(time);
    });

    $pause.on('click', function() {
        if (timer.getStatus() === 'started') {
            timer.pause();
        }
    });

    $stop.on('click', function() {
        if (/started|paused/.test(timer.getStatus())) {
            timer.stop();
        }
    });

    /*function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.now();
     var seconds = Math.floor((t/1000) % 60);
     var minutes = Math.floor((t/1000/60) % 60);
     var hours = Math.floor((t/(1000*60*60)) % 24);
     var days = Math.floor((t/(1000*60*60*24)));
     return {
     'total': t,
     'days': days,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
     };
     }

     function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var daysSpan = clock.querySelector('.days');
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
     var t = getTimeRemaining(endtime);

     daysSpan.innerHTML = t.days;
     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

     if (t.total <= 0) {
     clearInterval(timeinterval);
     playSound();
     }

     $('#pause-button').click(function() {
     t = getTimeRemaining(endtime);
     clearInterval(timeinterval);
     secondsRemaining = t.total / 1000;
     t = 0;
     $('.random-text').text(t.total);
     $('.random-text2').text(secondsRemaining);
     });

     $('#reset-button').click(function() {
     clearInterval(timeinterval);
     t = 0;
     currentTime = Date.now();
     deadline = new Date(currentTime + timer*60*1000);
     initializeClock('clockdiv', deadline);
     });
     }

     updateClock();
     var timeinterval = setInterval(updateClock, 1000);
     }

     var timeInMinutes = 25;
     var currentTime = Date.now();
     var deadline = new Date(currentTime + timeInMinutes*60*1000);

     initializeClock('clockdiv', deadline);

     var newDeadline;
     var secondsRemaining;

     $('#resume-button').click(function() {
     currentTime = Date.now();
     newDeadline = new Date(currentTime + secondsRemaining*1000);
     initializeClock('clockdiv', newDeadline);
     });

     var timer = timeInMinutes;
     document.getElementById("timer").innerHTML = timer;

     $('#timer-increase').click(function() {
     timer += 1;
     document.getElementById("timer").innerHTML = timer;
     });

     $('#timer-decrease').click(function() {
     if(timer > 0) {
     timer -= 1;
     document.getElementById("timer").innerHTML = timer;
     }
     });*/

    function playSoundEnd() {
        //var mySound = 'http://www.presentationmagazine.com/sound/bell_ting_ting.mp3';
        //http://onlineclock.net/audio/options/harp-strumming.mp3
        //http://onlineclock.net/audio/options/foghorn.mp3
        var mySound = 'http://www.presentationmagazine.com/sound/bell_ting_ting.mp3';
        var audio = new Audio(mySound);
        audio.play();
    }
});