  var drops = []
  var numDrops = 10;

function setup(){
  createCanvas(640, 360);

  for (var i = 0; i < numDrops; i++){
    drops[i] = new Drop()
  }
}

function draw() {
  background(44, 62, 80);
  //rotate(0.1);
  for(var i = 0; i < drops.length; i++){
    drops[i].fall();
    drops[i].show();
  }
}
