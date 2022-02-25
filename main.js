function setup(){
    bla2=createCanvas(340,340);
    bla2.center();
}
bla3="";
object=[];
video="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function draw(){
    image(video,0,0,340,340);
    if(bla3!=""){
  cocossd.detect(video,gotAns);
  for(a=0;a<object.length;a++) {
 document.getElementById("blano.").innerHTML="status:object detected ";
 document.getElementById("status").innerHTML="Number of Objects detected are -"+object.length;
 fill("aquamarine");
 persent= floor(object[a].confidence*100); 
text(object[a].label+" "+persent+"%",object[a].x+15,object[a].y+15);
noFill();
rect(object[a].x,object[a].y,object[a].width,object[a].height);
  }}
}
function gotAns(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
     object=results;
    }
}
function start(){
    cocossd=ml5.objectDetector("cocossd",modalLoaded);
 document.getElementById("blano.").innerHTML="status Detecting objects";
}
function modalLoaded(){
    console.log("ALL IS WELL!");
    video.loop();
    video.speed(1);
    video.volume(0.3);
    bla3=true;
}
function stop(){
    video.stop();
}