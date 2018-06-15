var player = new Player();
var	mousex;
var	mousey;
function Player(){
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.v = 0;
	this.angle = 0;
	this.lastShootTime = 0;
	this.stats = {maxV:100,dAngle:0.03,acc:2,shootDelayMs:100};
	this.update = function(dt){
		if(keyLogger.keyStatus.up){
			if(this.y < 412 && this.y >200 && this.x < 260 && this.x > 190)
				this.y = this.y;
			else if(this.y < 167 && this.y >100 && this.x < 1010 && this.x > 790)
				this.y = this.y;
			else
				this.y -= this.stats.acc;
		}
		if(keyLogger.keyStatus.down){
			if(this.y < 410 && this.y >190 && this.x < 260 && this.x > 190) 
				this.y = this.y;
			else if(this.y < 160 && this.y >87 && this.x < 1010 && this.x > 790)
				this.y = this.y;
			else
			this.y += this.stats.acc;
		}
		if(keyLogger.keyStatus.left){
			if(this.y < 410 && this.y >193 && this.x < 270 && this.x > 190) 
				this.x = this.x;
			else if(this.y < 165 && this.y >100 && this.x < 1015 && this.x > 790)
				this.y = this.y;
			else
				this.x -= this.stats.acc;
		}
		if(keyLogger.keyStatus.right){
			if(this.y < 410 && this.y >193 && this.x < 260 && this.x > 185) 
				this.x = this.x;
			else if(this.y < 165 && this.y >90 && this.x < 1000 && this.x > 785)
				this.y = this.y;
			else
			this.x += this.stats.acc;
			
		}

		var time = utils.getTime();
		if(keyLogger.keyStatus.fire &&
			time - this.lastShootTime >= this.stats.shootDelayMs){
			bullets.push({
				x:this.x,
				y:this.y,
				angle:this.angle,
				v:250
			});
			this.lastShootTime = time;
		}
		
	};
	this.calculateAngle = function(e){
		var mousex = e.clientX;
		var mousey = e.clientY;
		if((mousex-this.x) > 0){
      	this.angle = Math.atan((mousey-this.y)/(mousex-this.x));}
		else
		this.angle = Math.atan((mousey-this.y)/(mousex-this.x))+Math.PI;	
	};
	this.render = function(ctx){
		ctx.fillStyle="#FF0000";
		ctx.beginPath();
		ctx.arc(this.x,this.y,10,0,6.28);
		ctx.fill();
	
		ctx.strokeStyle="#FF0000";
		ctx.beginPath();
		ctx.moveTo(this.x,this.y);
		var pointerLength = 25;
		ctx.lineTo(
			this.x + pointerLength * Math.cos(this.angle),
			this.y + pointerLength * Math.sin(this.angle)
			);
		ctx.stroke();
	};
	
}