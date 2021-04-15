var a , b; 


function setup() {
    createCanvas(800,400);
  
    a =  createSprite(400, 200, 20, 80 );
    a.shapeColor="green"
  

   b = createSprite(200, 200, 80, 50);
   b.shapeColor="green";

  }
  
  function draw() {

    b.x=mouseX;
    b.y=mouseY;

    var width1 = a.width / 2 + b.width/2 ;


    console.log(b.x - a.x);

    if ( b.x - a.x < width1  && a.x - b.x < width1){

      a.shapeColor="red";
      b.shapeColor="red"
    }
    else{
      a.shapeColor="green";
      b.shapeColor="green"
    }
    
    
    background(255,255,255);  
    drawSprites();
  }