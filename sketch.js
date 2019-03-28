let sprite
const size = 128
let speedX = 0
let speedY = 0
let x = 0
let count = 0
let pie = 0
function preload() {
	sprite = loadImage('images/sprite.jpg')
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(900)
}

function draw() {
	background('#36BF03')

	//cielo
	fill('#074BFF')
	noStroke()
	rect(0, 0, width, 85)

	fill('#F2F4D3')
	noStroke()
	ellipse(-50, 0, width, 45)
	fill('#FFEC07')
	noStroke()
	ellipse(1300, 0, 85, 85)

	//camino
	fill('#F9C364')
	noStroke()
	rect(0, 100, width, 85, 20)
	rect(0, 200, width, 85, 20)
	rect(0, 300, width, 85, 20)
	rect(0, 400, width, 85, 20)
	rect(0, 500, width, 85, 20)
	rect(0, 600, width, 85, 20)

	//piedras
	fill('#88897A')
	noStroke()
	ellipse(2, 125, 35, 20)
	ellipse(80, 150, 35, 20)
	ellipse(869, 135, 35, 20)
	ellipse(550, 135, 35, 20)


	ellipse(20, 250, 35, 20)
	ellipse(150, 270, 35, 20)
	ellipse(650, 255, 35, 20)
	ellipse(1500, 235, 35, 20)

	ellipse(550, 330, 35, 20)
	ellipse(1100, 380, 35, 20)
	ellipse(1250, 350, 35, 20)
	ellipse(1500, 340, 35, 20)

	ellipse(550, 440, 35, 20)
	ellipse(1100, 480, 35, 20)
	ellipse(1250, 450, 35, 20)
	ellipse(1500, 425, 35, 20)

	ellipse(550, 550, 35, 20)
	ellipse(1100, 560, 35, 20)
	ellipse(1250, 580, 35, 20)
	ellipse(1500, 570, 35, 20)	
	run()
}

function run(){
	if (x <= windowWidth) {
		translate(count, pie)
		copy(sprite, speedX, speedY, 128, 128, x, 0, 128, 128)
		speedX += size
		if (speedX == 512) {
			speedX = 0
			speedY += size
		}
		if (speedY == 512) {
			speedY = 0
			speedX = 0
		}
		x++
		count = x
			
	}else{
		translate(count, pie)
		scale(-1,1)
		copy(sprite, speedX, speedY, 128, 128, 0, 0,128, 128)
		speedX += size
		if (speedX == 512) {
			speedX = 0
			speedY += size
		}
		if (speedY == 512) {
			speedY = 0
			speedX = 0
		}
		count--
	}
	/*
	if (count == 0 || x == windowWidth) {
		x = 0
		pie+=100
	} else if (x == windowWidth) {
	pie+=100 
}
	if (pie > windowHeight){
		count = 0
		x = 0
		pie = 0
	}
	*/

	if (count == 0) {
		x=0
		pie+=100

	}else if (x == windowWidth){

		pie+=100
	} 
	if (pie >= windowHeight){
		count = 0
		x = 0
		pie = 0
	}
} 
