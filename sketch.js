let fillValue = 0;
let fillDelta = 0.12;
let scaleFactor = 0.2;
let numDrops = 400;
let drops = [];
let initialRadius = 40;
let excitementFactor = 1;
let temperature = 30;
function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB, 100);
  for(let i = 0; i < numDrops; i++){
    drops.push( new Drop(random((width-20))+10, random((height-20))+10, random(initialRadius)) );
  }
}
function draw() {
  if (mouseIsPressed) {
    if(temperature <= 100)
      temperature  += 1;
  } else {
    if(temperature > 0){
      temperature -= 0.2;  
    }    
  }
  excitementFactor = map(temperature, 0, 100, 0, 10);
  
  clear();  
  drops.forEach(function(item, index, array) {    
    item.move();
    item.draw();    
  });
  
  fill('black');
  textSize(50);
  textStyle(BOLD);
  text(round(temperature) + "º", 70,70)
}


class Drop {
  constructor(x, y, radius) {    
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(){
    let col = color(temperature,0,100-temperature);
    noStroke();
    fill( col );
    circle(this.x, this.y, this.radius);
  }
  move(){
    this.x += random(excitementFactor)-excitementFactor/2;
    this.y += random(excitementFactor)-excitementFactor/2;
  }
}