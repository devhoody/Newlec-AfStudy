var ball1 = new Ball(100,100,"black");
var ball2 = new Ball(200,40,"navy");

/**@type {HTMLCanvasElement} */

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var curBall = ball1;
curBall.setActive();

canvas.onclick = function(e){   //마우스이벤트 e, e.x 의미?=클릭한 x좌표 

    if((ball1.x - 30 < e.x && e.x < ball1.x + 30)&&
    (ball1.y - 30 < e.y && e.y < ball1.y + 30)){
    curBall.setActive(false);
    curBall = ball1;
    curBall.setActive();
    ball2.isActive = false;
    }

    if((ball2.x-30 < e.x && e.x < ball2.x+30)&&
    (ball2.y-30 < e.y && e.y < ball2.y+30)){
    curBall.setActive(false);
    ball2.moveTo(e.x, e.y);
    ball1.isActive = false;
    }

    curBall.moveTo(e.x, e.y);


}

window.setInterval(function(){

    ball1.update();
    ball2.update();
    
    ctx.clearRect(0,0,900,700);
    
    ball1.draw(ctx);
    ball2.draw(ctx);

}, 20);

// var ball1 = new Path2D();    
// ball1.arc(200, 100, 30, 0, Math.PI*2);
// ctx1.fillStyle = "red";
// ctx1.fill(ball1);