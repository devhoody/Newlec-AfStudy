var x = 100;
var y = 100;
var vx = 0;
var vy = 0;
var dx = 0;
var dy = 0;
var color = black;

/**@type {HTMLCanvasElement} */

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// 
canvas.onclick = function(e){
    dx = e.x;
    dy = e.y;

    var w = (dx-x);
    var h = (dy-y);
    var d = Math.sqrt(w*w + h*h);

    vx = w/d;
    vy = h/d;
    
}

// 클릭 시 1픽셀 안에 멈추게하기 (dx, dy) (vx, vy)

window.setInterval(function(){
    // 1픽셀 안에 멈추기 조건 
    if(
        (x-1 < dx && dx < x+1) && // 1픽셀 
        (y-1 < dy && dy < y+1)
    ) {
        vx = 0;
        vy = 0;
    }

    // vx, vy 증가량
    x+=vx;
    y+=vy;

    // 원 그리기 
    var ctx = canvas.getContext("2d");
    var ball = new Path2D();    
    ball.arc(x, y, 30, 0, Math.PI*2)
    ctx.clearRect(0,0,900,700);
    ctx.fillStyle="blue";
    ctx.fill(ball);
}, 1000);

var ball1 = new Path2D();    
ball1.arc(200, 100, 30, 0, Math.PI*2);
ctx1.fillStyle = "red";
ctx1.fill(ball1);