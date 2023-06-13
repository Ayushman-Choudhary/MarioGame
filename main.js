noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_collect = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(800,336);
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent('game_console')
	instializeInSetup(mario);
	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('poses', gotResults)
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Model Loaded !")
}

function gotResults(results){
	if(results.length>0){
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}