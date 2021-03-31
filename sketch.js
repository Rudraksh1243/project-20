var garden1,garden2,cat1,cat2,cat3,cat4,tom, mouse1, mouse2, mouse3, mouse4,jerry;
function preload() {
    //load the images here
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
    garden1=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,600);
tom.addAnimation("cat1",cat1);
tom.scale=0.2;
tom.debug=true;
jerry=createSprite(200,600);
jerry.addAnimation("mouse1",mouse1);
jerry.scale=0.1;
jerry.debug=true;
jerry.setCollider("rectangle",25,25);
}

function draw() {

    background(garden1);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2+jerry.width/2){
tom.velocityX=0;
tom.addAnimation("cat3",cat3);
tom.changeAnimation("cat3");
jerry.addAnimation("mouse3",mouse3);
jerry.changeAnimation("mouse3");
tom.scale=0.2;
jerry.scale=0.1;

    }
    drawSprites();
}


function keyPressed(){
if (keyCode===(LEFT_ARROW)){
tom.velocityX=-5;
tom.addAnimation("cat2",cat2);
tom.changeAnimation("cat2");
jerry.addAnimation("mouse2",mouse2);
jerry.changeAnimation("mouse2");

}
  //For moving and changing animation write code here


}
