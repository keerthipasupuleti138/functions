var f,m
var a ,b
var go1,go2,go3,go4
function setup(){
  createCanvas(1200,800)
  f=createSprite(200,200,50,80)
  m=createSprite(400,200,80,30)
  f.shapeColor="green"
  m.shapeColor="green"
 
  go1=createSprite(100,100,50,50)
  go2=createSprite(300,100,50,50)
  go3=createSprite(500,100,50,50)
  go4=createSprite(700,100,50,50)
  go1.shapeColor="green"
  go2.shapeColor="green"
  go3.shapeColor="green"
  go4.shapeColor="green"
}
function draw(){
  background(0)
  m.x=World.mouseX
  m.y=World.mouseY
  
  if(isTouching(m,go3)){
    return true 
  }
 
 
  drawSprites()
}
function isTouching(o1,o2){
  a=o1.width/2+o2.width/2
  b=o1.height/2+o2.height/2
  if(o2.x-o1.x<a && o1.x-o2.x<a && o2.y-o1.y<b && o1.y-o2.y<b){

    o2.shapeColor="red"
    o1.shapeColor="red"
  }
  else{
    o1.shapeColor="green"
    o2.shapeColor="green"
  }
}