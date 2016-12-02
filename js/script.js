var bird;
var lines = [];

var score = 0;
var scoreDiv = document.getElementById('score');
var scoreSpan = scoreDiv.querySelector('span');

var jumpSound;
var theEndSound;

function setup() {
	createCanvas(500,800);
	bird = new Bird();
	lines.push(new Line());

	jumpSound = loadSound('/p5/sound/jump.wav');
	theEndSound = loadSound('/p5/sound/theend.wav');
}

function draw() {
	background(50);

	// lines.forEach(function(l,i, o) {
	// 	l.show();
	// 	l.update();
	// 	if(l.visible()) {
	// 		o.splice(i, 1);
	// 	}
	// })

	if(frameCount % 120 == 0) {
		lines.push(new Line());
	}

	if(score > 5) {
		bird.gravity = 6;
	}

	bird.update();
	bird.show();

	for(var i = lines.length - 1; i >= 0; i--) {
		lines[i].show();
		lines[i].update();

		if(lines[i].detect(bird) === 1) {
			scoreSpan.innerHTML = ++score;
		} else if(lines[i].detect(bird) === 2) {
			scoreDiv.className = "finished";
			theEndSound.play();
			remove();
		}

		// We MUST delete the lines that are out of our 'viewport', because after
		// few minutes of playing your browser will DIE xD

		if(lines[i].visible()) {
			lines.splice(i, 1); // [1]
		}
	}

	/*
	* To check if the splacing is working and what is happening if not
	* uncomment the line bellow [2] and comment [1]
	*/

	//console.log(lines.length); // [2]

}

function keyPressed() {
	if (key = ' ') {
		jumpSound.play();
		bird.jump();
	}
}
