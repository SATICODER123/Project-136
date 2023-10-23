video = "";

function preload() {
    video = createVideo("video.mp4")
    video.hide();
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
  }

function draw() {
    image(video, 0, 0, 480, 380);
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}