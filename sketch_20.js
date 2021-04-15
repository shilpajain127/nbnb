
var a , b; 

function setup() {
    createCanvas(800,400);
   a =  createSprite(400, 200, 50, 80 );
   a.shapeColor="green";

   b = createSprite(400, 200, 80, 50);
   b.shapeColor="green";
  }
  
  function draw() {

    background(255,255,255);  

    b.x=mouseX;
    b.y=mouseY;

    var width1= a.width/2 + b.width/2;

    if (b.x - a.x < width1 && a.x - b.x < width1 ){
        a.shapeColor="red";
        b.shapeColor="red";
    }
    else{
        a.shapeColor="green";
        b.shapeColor="green";
    }

    console.log(b.x- a.x );
       
    drawSprites();
  }