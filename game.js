let dinoX = 50
let dinoY = 300
let cacX = []
let cacY = 250
let speed = 0
let counter = 0
const grav = 0.3
for (let i = 0; i < 5; i++) {
	cacX[i] = 600 + i * Math.random() * 600
}
function update() {
	for (let i = 0; i < 5; i++) {
		cacX[i] -= 3
		if(cacX[i] < -50){
			cacX[i] = 900 + i*Math.random()*600
		}
		if (areColliding(dinoX, dinoY, 50, 50, cacX[i], cacY, 40, 80)) {
			alert("Game Over!")
		}

	}
	speed += grav
	if (dinoY >= 300) {
		speed = 0
		counter = 0
	}
	dinoY += speed
}

function draw() {
	drawImage(tank[4], dinoX, dinoY, 75, 50)
	for (let i = 0; i < 5; i++) {
		drawImage(cactus, cacX[i], cacY, 50, 100)
	}
}

function keyup(key) {
	if (counter <= 4) {
		if (key == 32) {
			counter++
			speed += -8
			dinoY += speed * 2
		}
	}
}