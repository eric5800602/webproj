
var canvas,
	ctx,
	width,
	height;


function init(){
	
	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
	window.onkeydown = keyLogger.keyDownListener;
	window.onkeyup = keyLogger.keyUpListener;
	window.addEventListener('mousemove',(e) => {
		player.calculateAngle(e);
		keyLogger.mousefire(e);

	})
	//Init player
	player.x = width/2;
	player.y = height/2;
	
	//Main game loop
	
	setInterval(function(){
	updateGame(0.01);
	renderGame();	
	renderobstacle();
	},10);
	
}

function updateGame(dt){
	bullets.update(dt);
	targets.update(dt);
	player.update(dt);
}

function renderGame(){
	renderBackground();
	player.render(ctx);
	bullets.render(ctx);
	targets.render(ctx);
}
function renderBackground(){
	ctx.fillStyle = "#c6c6c6";
	ctx.fillRect(0,0,width,height);

}
function renderobstacle(){
	ctx.fillStyle = "rgb(150,150,0)";
    ctx.fillRect (200, 200, 55, 200);
    ctx.fillRect (800, 100, 200, 55);
}
