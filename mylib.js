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