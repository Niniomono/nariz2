nosex = 0;
nosey = 0;
function preLoad() {
}
function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
   classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded() 
{
console.log('Modelo cargado');
}
function gotPoses(results) {
   if(results.length > 0) {
    console.log(results);
    nosex = [0].pose.nose.x - 15;
    nosey = [0].pose.nose.y - 15;
   }
}
function draw() {
  image(video, 0, 0, 300, 300);
}
function take_snapshot() {
  save('myFilterImage.PNG');
}
