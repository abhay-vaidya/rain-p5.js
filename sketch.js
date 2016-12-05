  var drops = []
  var numDrops = 600;

function setup(){
  createCanvas(640, 360);

  for (var i = 0; i < numDrops; i++){
    drops[i] = new Drop()
  }
}

function draw() {
  lightning = random(1,100);
  if(lightning < 99.9){
    background(44, 62, 80);
  } else{
    background(199, 207, 219);
  }

  rotate(0.025);
  for(var i = 0; i < drops.length; i++){
    drops[i].fall();
    drops[i].show();
  }
}
