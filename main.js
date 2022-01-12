var x = 0
var y = 0 
function setup() {
canvas = createCanvas(300,300);
canvas.center() 
video = createCapture(VIDEO) 
video.size(300, 300)
video.hide() 
// postnet initianation 
posenet = ml5.poseNet(video, modelloaded)
// posenet execution 
posenet.on('pose', gotposes)  
}
function draw() {
image(video,0,0,300,300)
image(clowned, x,y ,30,30)
}
function preload() {
clowned = loadImage("https://i.postimg.cc/d0SSg4xz/hair-mustaches-icon-on-white-260nw-1090413641-removebg-preview.png")
}
function takesnapshot() {
    save("ureaclown.png")
}
function modelloaded() { ;
    console.log("posenet is initialized")
}
function gotposes(results) {  
    if (results.length > 0) {
        console.log(results); 
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        x = results[0].pose.nose.x-10
        y = results[0].pose.nose.y+10
    }
}