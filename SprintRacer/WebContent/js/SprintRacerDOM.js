onload = function() {
	console.log('IN ONLOAD');
	init();
};

function init() {
	var body = document.body;
	startGame();
	var br = document.createElement('br');
	body.appendChild(br);
	var testbutton = createButton('TestButton');
	body.appendChild(testbutton);
	testbutton.addEventListener("click", test);
}

function startGame() {
	myTrackArea.start();
	drawMap();
	myRaceCar = new component(15, 30, 'red', 700, 385);
	
	
	// directionalButtons();

}
var outterMap = function() {
	var cx = document.querySelector('canvas').getContext('2d');
	path1 = new Path2D();
	// cx.beginPath();
	path1.moveTo(697,35);
	path1.lineTo(100,35);
	path1.quadraticCurveTo(10,30,20,115);
	path1.lineTo(20,485);
	path1.quadraticCurveTo(30, 580, 110, 558);
	path1.lineTo(240,558);
	path1.quadraticCurveTo(340, 580, 325,485);
	path1.lineTo(325, 412);
	path1.quadraticCurveTo(325,380, 355, 400);
	path1.lineTo(522,544);
	path1.quadraticCurveTo(542,571,565,558);
	path1.lineTo(700, 558);
	path1.quadraticCurveTo(790, 580, 780, 485);
	path1.lineTo(780,114);
	path1.quadraticCurveTo(785, 40, 697, 35);	
	cx.strokeStyle = 'blue';
	cx.fillStyle = 'blue';
	cx.stroke(path1);
	cx.fill(path1);
};

var innerMap = function() {
	var cx1 = document.querySelector('canvas').getContext('2d');
	path2 = new Path2D();
	path2.moveTo(625,186);
	path2.lineTo(180,186);
	path2.quadraticCurveTo(160, 181, 164, 203);
	path2.lineTo(164, 420);
	path2.quadraticCurveTo(175, 440, 185, 420);
	path2.lineTo(185, 318);
	path2.quadraticCurveTo(213, 233, 280, 244);
	path2.lineTo(366, 244);
	path2.quadraticCurveTo(423, 240, 615, 420);
	path2.quadraticCurveTo(640,460,640,410);
	path2.lineTo(640,203);
	path2.quadraticCurveTo(640, 186, 625, 186);
	cx1.fillStyle = 'green';
	cx1.stroke(path2);	
	cx1.fill(path2);
};

var outterMostMap = function () {
	var cx2 = document.querySelector('canvas').getContext('2d');
	path3 = new Path2D();
	path3.moveTo(0,0);
	path3.lineTo(0,600);
	path3.lineTo(800,600);
	path3.lineTo(800,0);
	path3.closePath();
	cx2.fillStyle = 'green';
	cx2.fill(path3);
};

var finishLine = function() {
	var cx3 = document.querySelector('canvas').getContext('2d');
	path4 = new Path2D();
	path4.moveTo(781, 416);
	path4.lineTo(640,416);
	path4.lineTo(640, 401);
	path4.lineTo(781, 401);
	path4.closePath();
	cx3.fillStyle = 'white';
	cx3.fill(path4);
}
var drawMap = function() {
	outterMostMap();
	outterMap();
	innerMap();
	finishLine();
};

var directionalButtons = function() {
	var br = document.createElement('br');
	var br1 = document.createElement('br');
	var br2 = document.createElement('br');
	document.body.appendChild(br);
	// var up = createButton('UP');
	// document.body.appendChild(up);
	// up.addEventListener("mousedown", moveUp);
	// up.addEventListener("mouseup", stopMoving);
	// document.body.appendChild(br1);
	// var left = createButton('LEFT');
	// left.addEventListener("mousedown", moveLeft);
	// left.addEventListener("mouseup", stopMoving);
	// document.body.appendChild(left);
	// var right = createButton('RIGHT');
	// right.addEventListener("mousedown", moveRight);
	// right.addEventListener("mouseup", stopMoving);
	// document.body.appendChild(right);
	// document.body.appendChild(br2);
	// var down = createButton('DOWN');
	// down.addEventListener('mousedown', moveDown);
	// down.addEventListener('mouseup', stopMoving);
	// document.body.appendChild(down);
};

var stopMoving = function() {
	myRaceCar.moveAngle = 0;
	if (myRaceCar.speed > 4) {
	myRaceCar.speed = 4;
	}
	// myRaceCar.deltaX = 0;
	// myRaceCar.deltaY = 0;
};

var moveUp = function() {
	if(myRaceCar.speed >4) {
		myRaceCar.speed = myRaceCar.speed;
	}
	else {
	myRaceCar.speed += .01;
	}
	// myRaceCar.deltaY = -1;
};

function moveLeft() {
	myRaceCar.moveAngle = -1;
	// myRaceCar.deltaX = -1;
}

function moveRight() {
	myRaceCar.moveAngle = 1;
	// myRaceCar.deltaX = 1;
}

function moveDown() {
	myRaceCar.speed -= .04;
	// myRaceCar.deltaY = 1;
}

var updateTrackArea = function() {
	myTrackArea.clear();
	stopMoving();
	if(myTrackArea.keys && myTrackArea.keys[37]) {
		moveLeft();
	}
	if(myTrackArea.keys && myTrackArea.keys[38]) {
		moveUp();
	}
	if(myTrackArea.keys && myTrackArea.keys[39]) {
		moveRight();
	}
	if(myTrackArea.keys && myTrackArea.keys[40]) {
		moveDown();
	}	
	drawMap();
	myRaceCar.newPosition();
	myRaceCar.checkCollision();
	// console.log(myRaceCar.collision);
	if (myRaceCar.collision) {
		myTrackArea.gameOver();
	}
	if (!myRaceCar.lap) {
		if(myRaceCar.checkLap()) {
			myRaceCar.numLap += 1;
		}
	} else if(myRaceCar.lap) {
		if(!myRaceCar.checkLap()) {
			myRaceCar.lap = false;
		}
	}
	// myRaceCar.checkLap();
	myRaceCar.update();
};

var component = function(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.speed = 0;
	this.angle = 0;
	this.moveAngle = 0;
	this.x = x;
	this.y = y;
	this.collision = false;
	this.lap = false;
	this.numLap = 0;

	this.corner1 = function() {
		var tempx = -3.5;
		var tempy = 15;
		var roatx = (tempx * Math.cos(this.angle)) - (tempy * Math.sin(this.angle));
		var roaty = (tempx * Math.sin(this.angle)) + (tempy * Math.cos(this.angle));
		corner1X = roatx + this.x;
		corner1Y = roaty + this.y;
		var corner1Col = collisionChecker(corner1X, corner1Y);
		return corner1Col;
	};
	this.corner2 = function() {
		var tempx = 3.5;
		var tempy = 15;
		var roatx = (tempx * Math.cos(this.angle)) - (tempy * Math.sin(this.angle));
		var roaty = (tempx * Math.sin(this.angle)) + (tempy * Math.cos(this.angle));
		corner1X = roatx + this.x;
		corner1Y = roaty + this.y;
		var corner1Col = collisionChecker(corner1X, corner1Y);
		return corner1Col;
	};
	this.corner3 = function() {
		var tempx = 3.5;
		var tempy = -15;
		var roatx = (tempx * Math.cos(this.angle)) - (tempy * Math.sin(this.angle));
		var roaty = (tempx * Math.sin(this.angle)) + (tempy * Math.cos(this.angle));
		corner1X = roatx + this.x;
		corner1Y = roaty + this.y;
		var corner1Col = collisionChecker(corner1X, corner1Y);
		return corner1Col;
	};
	this.corner4 = function(lap) {

		var tempx = -3.5;
		var tempy = -15;
		var roatx = (tempx * Math.cos(this.angle)) - (tempy * Math.sin(this.angle));
		var roaty = (tempx * Math.sin(this.angle)) + (tempy * Math.cos(this.angle));
		corner1X = roatx + this.x;
		corner1Y = roaty + this.y;
		if (lap) {
			var lapCorner = lapChecker(corner1X, corner1Y);
			// console.log('IN CORNER 4 LapCorner = ' + lapCorner);
			return lapCorner;
		}
		else {	
		var corner1Col = collisionChecker(corner1X, corner1Y);
		return corner1Col;
		}
		
	};
	// this.deltaX = 0;
	// this.deltaY = 0;
	this.newPosition = function () {
		this.angle += this.moveAngle * Math.PI /180;
		this.x += this.speed * Math.sin(this.angle);
		this.y -= this.speed * Math.cos(this.angle);
	};
	this.update = function() {
		cx = myTrackArea.context;
		cx.save();
		cx.translate(this.x, this.y);
		cx.rotate(this.angle);
		cx.fillStyle = color;
		cx.fillRect(this.width/-2, this.height/-2, this.width, this.height);
		cx.restore();
	};
	this.checkCollision = function() {
		if (this.corner1()) {
			this.collision = true;
			// console.log('CORNER 1 HAS COLISSION');
		}
		else if (this.corner2()) {
			this.collision = true;
			// console.log('CORNER 2 HAS COLLISION');
		}
		else if (this.corner3()) {
			this.collision = true;
			// console.log('CORNER 3 HAS COLLISION');
		}
		else if (this.corner4()) {
			this.collision = true;
			// console.log('CORNER 4 HAS COLLISION');
		}
		else {
			return false;
		}
	};
	this.checkLap = function() {
		if(this.corner4(true)) {
			this.lap = true;
			return true;
		} else {
			return false;
		}
	};
};

var myTrackArea = {
	canvas : document.createElement('canvas'),
	start : function() {
		this.canvas.width = 800;
		this.canvas.height = 600;
		this.context = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);
		this.interval = setInterval(updateTrackArea, 20);
		window.addEventListener('keydown', function(e) {
			myTrackArea.keys = (myTrackArea.keys || []);
			myTrackArea.keys[e.keyCode] = true;
		});
		window.addEventListener('keyup', function(e) {
			myTrackArea.keys[e.keyCode] = false;
		});
	},
	clear : function() {
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	},
	gameOver : function() {
		clearInterval(this.interval);
		var canvas = document.querySelector('canvas');
		var gameMessage = document.createElement('h1');
		var lapMessage = document.createElement('h1');
		gameMessage.setAttribute('class', 'sectionheader');
		gameMessage.innerHTML = 'GAME OVAH!';
		lapMessage.setAttribute('class', 'sectionheader');
		lapMessage.innerHTML = 'You Completed ' + myRaceCar.numLap + ' Laps';
		document.body.insertBefore(gameMessage, canvas);
		document.body.insertBefore(lapMessage, canvas);
		canvas.parentNode.removeChild(canvas);

	},
};

var lapChecker = function(xPos, yPos) {
	var cxLap = document.querySelector('canvas').getContext('2d');
	if (cxLap.isPointInPath(path4, xPos, yPos)) {
		// console.log('LAP LAP LAP');
		return true;
	}
}

var collisionChecker = function(xPos, yPos) {
	var cxColl = document.querySelector('canvas').getContext('2d');
	if (cxColl.isPointInPath(path2, xPos, yPos)) {
		// console.log('INSIDE INNERMAP');
		return true;
	} 
	else if (cxColl.isPointInPath(path3, xPos, yPos) && !cxColl.isPointInPath(path1, xPos, yPos)) {
		// console.log('INSIDE INNERMAP');
		return true;
	}
	else {
		return false;
	}
};



































var xhrMethod = function(method, url, obj) {

	if (obj){
		console.log("IN xhrMETHOD" + method + url + obj);
		user =JSON.stringify(obj);
	} else {
		console.log("IN XHR***" + method + url);
	}

	var xhr = new XMLHttpRequest();
//	JSON.stringify(obj);
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		console.log(xhr.status);
		if(xhr.readyState === 4) {
		
			}
		}
	if(obj) {
		xhr.send(user);
	} else {
		xhr.send();
	}
};

var test = function(event) {
	event.preventDefault();
	console.log('TEST-BUTTON!!');
};

var createButton = function(buttonValue) {
	var button = document.createElement('input');
		button.setAttribute('name', 'submit');
		button.setAttribute('class', 'submit');
		button.setAttribute('type', 'submit');
		button.setAttribute('id', 'BUTTON');
		button.setAttribute('value', buttonValue);
		return button;
};
var login = function(event) {
	event.preventDefault();
	console.log('IN LOGIN EVENT');
};