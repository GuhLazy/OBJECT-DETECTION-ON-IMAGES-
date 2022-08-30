img="";
status="";
objects=[];
function preload(){
 img=loadImage("bedroom.jpg");
}
function setup(){
 canvas=createCanvas(640,420)
 canvas.center()

 objectDetector = ml5.objectDetector('cocossd', modelLoaded)
 document.getElementById("status").innerHTML = "Status : dectecting objects"

}
function draw(){
  image(img,0,0,640,420)
  
  if(status!=""){
   
    for(var i=0; i<objects.length; i++ ){
       
      document.getElementById("status").innerHTML = "Status : dectecting objects"
      fill("peachpuff")
      textSize(25)
      text(objects[i].label, objects[i].x, objects[i].y)
      noFill()
      push()
      stroke("black")
      strokeWeight(5)
      rect(objects[i].x , objects[i].y , objects[i].width, objects[i].height)
      pop()
    
    }
  }


}
function modelLoaded(){
  console.log("model loaded")
  status=true;
  objectDetector.detect(img, gotResults)

}
function gotResults(error,results){
 if(error){
 console.log(error)
 }
 else {
  console.log(results)
  objects = results;
 }
}
