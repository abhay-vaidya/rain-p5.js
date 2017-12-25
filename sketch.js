  var drops = []
  var numDrops = 700;

  function setup() {
      createCanvas(windowWidth, windowHeight);
      for (var i = 0; i < numDrops; i++) {
          drops[i] = new Drop();
      }
      umbrella = loadImage("umbrella.png");
      man = loadImage("man.png");
  }

  function draw() {
      lightning = random(1, 100);
      if (lightning < 99.9) {
          background(14, 32, 50);
      }
      else {
          background(199, 207, 219);
      }
      
      imageMode(CENTER);
      image(man, windowWidth/2, windowHeight - man.height/4 + 10, man.width/2, man.height/2);
      image(umbrella, mouseX, mouseY, umbrella.width/3, umbrella.height/3);
      
      for (var i = 0; i < drops.length; i++) {
          drops[i].fall();
          drops[i].show();
      }
  }

  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
  }