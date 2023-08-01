function Ball(x, y, color){
    this.x = x || 100;
    this.y = y || 100;
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = color || black;
    this.isActive = false;
}

Ball.prototype = {
    constuctor : Ball,
    moveTo: function(dx, dy){

        this.dx = dx;
        this.dy = dy;
    
        var w = (this.dx-this.x);
        var h = (this.dy-this.y);
        var d = Math.sqrt(w*w + h*h);
    
        this.vx = w/d;
        this.vy = h/d;
    },
    update: function(){
        if(
            (this.x-1 < this.dx && this.dx < this.x+1) &&
            (this.y-1 < this.dy && this.dy < this.y+1)
        ) {
            this.vx = 0;
            this.vy = 0;
        }
        this.x+=this.vx;
        this.y+=this.vy;
    },
    draw: function(ctx){
        var shape = new Path2D(); 
        
        var originColor = ctx.fillStyle;
        shape.arc(this.x, this.y, 30, 0, Math.PI*2);
        ctx.fillStyle=this.color;
        ctx.fill(shape);
        ctx.fillStyle = originColor;

        if(this.isActive) {             //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            var originColor = ctx.strokeStyle;
            ctx.strokeStyle="yellow";
            ctx.lineWidth = 10;
            ctx.stroke(shape);
            ctx.strokeStyle = strokeColor;
        }

    },
    setActive: function(active){    //!!!!!!!!!!!!!!!!!!!!!!
        if(active === undefined) {   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            this.isActive = true;
            return;
        }
        this.isActive = active;
    },
    isActive: function(ex,ey){
        
    }


};