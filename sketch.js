var canvas , box , row1 , row2 , row3 , row4 ,edges;

var music;

function preload(){

    music = loadSound("music.mp3");

}

function setup(){
   
    canvas = createCanvas(700,600);

    //create 4 different surfaces

    row1=createSprite(90,570,160,20);
    row1.shapeColor=("red");

    row2=createSprite(260,570,160,20);
    row2.shapeColor=("darkblue"); 

    row3=createSprite(430,570,160,20);
    row3.shapeColor=("yellow");

    row4=createSprite(600,570,160,20);
    row4.shapeColor=("green");

    //create box sprite and give velocity

    box=createSprite(20,30,30,30);
    box.shapeColor=("white");
    box.velocityY=10 ;
    box.velocityX= 6 ;
    box.x=Math.round(random(20,650))

}

function draw() {

    background("cyan");

    //create edgeSprite
    
    edges=createEdgeSprites();
    
    box.bounceOff(edges);
   
      //add condition to check if box touching surface and make it box

    if(box.isTouching(row1) && box.bounceOff(row1)){
       
        box.shapeColor=("red");
        
        music.play();

    }

    if(box.isTouching(row2) && box.bounceOff(row2)){
       
        box.shapeColor=("darkblue");
       
        music.play();

    }

    if(box.isTouching(row3) && box.bounceOff(row3)){
       
        box.shapeColor=("yellow");
       
        music.play();

    }
  
    if(box.isTouching(row4) && box.bounceOff(row4)){
       
        box.shapeColor=("green");
       
        music.play();

    }

 drawSprites();

}




