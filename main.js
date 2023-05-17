status = "";
objects = [];
img = "";
function preload(){
img = loadImage("Laptop Image.jpg")  
}
function setup(){
canvas = createCanvas(380 , 380);
canvas.center(); 
video = createCapture(VIDEO);
video.size(380,380)
video.hide()
}
function start(){
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);  
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded");    
status = true;
objectDetector.detect(video , gotResult);
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
objects = results;
}
function draw(){
image(video , 0 , 0 , 380 , 380);
if(status != ""){
r = random(255);
g = random(255);
b = random(255);
objectDetector.detect(video , gotResult);
for (i = 0; i < objects.length; i++){
document.getElementById("status").innerHTML = "Status : Object Detected!";
document.getElementById("n_o_b").innerHTML = "Number Of Objects Detected Are : " + objects.length;
fill(r , g , b);
percent = floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%" , objects[i].x +15 , objects[i].y +15);
noFill();
stroke(r , g , b);
rect(objects[i].x - 50 , objects[i].y - 50 , objects[i].width - 200 , objects[i].height - 100);
}
}
}
function back_mob1(){
window.location = "Home.html";    
}