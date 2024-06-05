function BrowserDetection() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var e = new Number(RegExp.$1);
        rint = 10;
        pulsion = 3
    } else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var t = new Number(RegExp.$1);
        rint = 50;
        pulsion = 16
    } else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var n = new Number(RegExp.$1);
        rint = 50;
        pulsion = 16
    } else if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var r = new Number(RegExp.$1);
        rint = 50;
        pulsion = 16
    } else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var i = new Number(RegExp.$1);
        rint = 50;
        pulsion = 16
    }
    WIDTH = window.innerWidth;
    if (WIDTH < 1024) {
        numberObject = 19e3;
        numberBall = 20;
        pulsion = 2;
        rint = 10
    }
}
function draw() {
    con.clearRect(0, 0, WIDTH, HEIGHT);
    for (var e = 0; e < pxs.length; e++) {
        pxs[e].fade();
        pxs[e].move();
        pxs[e].draw()
    }
}
function Circle() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    this.s = {
        ttl: numberObject,
        xmax: speedX,
        ymax: speedY,
        rmax: radius,
        rt: pulsion,
        xdef: 960,
        ydef: 540,
        xdrift: 4,
        ydrift: 4,
        random: true,
        blink: false
    };
    this.reset = function () {
        this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
        this.y = HEIGHT / 2;
        this.r = (this.s.rmax - 1) * Math.random() + 1;
        this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);
        this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);
        this.hl = this.s.ttl / rint * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * .2 + .4;
        this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)
        this.shadow = Math.floor(Math.random() * 20) + 5;
    };
    this.fade = function () {
        this.rt += this.s.rt / 2
    };
    this.draw = function () {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl) this.reset();
        var e = 1 - this.rt / this.hl;
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var t = this.r * e;
        g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);
        g.addColorStop(1, colorRect + e * opacityRect + ")");
        con.fillStyle = g;
        con.fill()
        con.shadowOffsetX = 0;
        con.shadowOffsetY = 0;
        con.shadowBlur = this.shadow;
        con.shadowColor = 'rgba(255,255,255,1)';
    };
    this.move = function () {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        this.x += this.rt / this.hl * this.dx;
        this.y += this.rt / this.hl * this.dy;
    };
    this.getX = function () {
        return this.x
    };
    this.getY = function () {
        return this.y
    }
}
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = new Array;
var numberObject = 8e3;
var numberBall = 200;
var pulsion = 16;
var speedX = 1;
var speedY = $(window).height() / 400;
var colorRect = "rgba(255,255,255,";
var opacityRect = 1;
var rint = 30;
var radius = 10;
function ResizeLatestUpdateTitles(input){
  if(parseInt($('.latest-updated-slider-item-title').eq(input).css('height')) > 28){
    $('.latest-updated-slider-item-title').eq(input).css('font-size', (parseInt($('.latest-updated-slider-item-title').eq(input).css('font-size')) - 1) + 'px' );
    ResizeLatestUpdateTitles(input);
  }
}
function ResizeLatestReleasedTitles(input){
  if(parseInt($('.latest-released-slider-item-title').eq(input).css('height')) > 28){
    $('.latest-released-slider-item-title').eq(input).css('font-size', (parseInt($('.latest-released-slider-item-title').eq(input).css('font-size')) - 1) + 'px' );
    ResizeLatestReleasedTitles(input);
  }
}
$(document).ready(function () {
    BrowserDetection();
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    canvas = document.getElementById("sparkles");
    $(canvas).attr("width", WIDTH).attr("height", HEIGHT);
    con = canvas.getContext("2d");
    for (var e = 0; e < numberBall; e++) {
        pxs[e] = new Circle;
        pxs[e].reset()
    }
    setInterval(draw, rint);
    $('.latest-updated-slider-item-title').each(function(index){
      ResizeLatestUpdateTitles(index);
    });
    $('.latest-released-slider-item-title').each(function(index){
      ResizeLatestReleasedTitles(index);
    });
});

$('#community-ticker-feed-button').click(function(){
  if($('#community-ticker-feed').css('display') === 'none'){
    $('#community-ticker-feed-button').css('-webkit-animation','stop');
    $('#community-ticker-feed').css('opacity', 0).slideDown(200).animate(
        { opacity: 1 },
        { queue: false, duration: 200 });
    $('#community-ticker-feed-shadow').fadeIn(200);
  }
  else{
    $('#community-ticker-feed').slideUp(200).animate(
        { opacity: 0 },
        { queue: false, duration: 200 });
    $('#community-ticker-feed-shadow').fadeOut(200);
  }
});