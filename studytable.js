img = "";
objects = [];
status = "";
function preload (){
    img = loadImage("studytable.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetected = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status1").innerHTML = "status:detecting objects";
}

function draw(){
 image(img,0,0,640,420);
 //background("yellow")//
 noFill();
rect(0,0,640,420);
}
function modelloaded(){
console.log("cocossd has been loaded completely");
status = true;
}



