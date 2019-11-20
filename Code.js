let move_x = 0;
let move_y = 0;
let size = 1;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  fill(0);
  textSize(25);
  text('NO SIGNAL', 25, 100);

  for (let i = 0; i < random(99999999); i++) {
    noStroke();
    fill(random(200), random(200), random(200));
    move_x = move_x + 1;
    move_y = move_y + 0.01;
    size = random(1, 2);
    rect(move_x, move_y, size, size);
    if (move_x > 200) {
      move_x = 0;
    }
    if (move_y > 200) {
      move_y = 0;
    }
  }
}
