/**
 * Created by Bradley on 12/28/15.
 */

/*
* ---------
* Function for CSS based radial
* ---------
* */

/*
$(function(){
    var $ppc = $('.progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    $('.ppc-percents span').html(percent+'%');
});*/


/*
* -----------
* Function for SVG based radial
* -----------
* */

var clamp = function (n, min, max) {
    return Math.max(min, Math.min(max, n));
};

var drawProgress = function(percent){

    if(isNaN(percent)) {
        return;
    }

    percent = clamp(parseFloat(percent), 0, 1);

    // 360 loops back to 0, so keep it within 0 to < 360
    var angle = clamp(percent * 360, 0, 359.99999);
    var paddedRadius = 50 + 1;
    var radians = (angle * Math.PI / 180);
    var x = Math.sin(radians) * paddedRadius;
    var y = Math.cos(radians) * - paddedRadius;
    var mid = (angle > 180) ? 1 : 0;
    var pathData = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, paddedRadius)
        + mid + ' 1 '
        + x + ' '
        + y + ' z';

    var bar = document.getElementsByClassName ('progress-radial-bar')[0];
    bar.setAttribute( 'd', pathData );
};

var max = 1;
var progress = 0.0;

drawProgress(progress);

/*
var interval = window.setInterval(function () {
    progress = progress + 0.01;
    if(progress >= max) {
        window.clearInterval(interval);
    }
    drawProgress(progress);
}, 10);*/
