var harry_potter_song = "";
var peter_pan_song = "";

function setup() {
canvas = createCanvas(700, 600);
canvas.center();
canvas.position(500, 185);

video = createCapture(VIDEO);
video.hide();
}

function preload()
{
    harry_potter_song = loadSound("Harry Potter.mp3");
    peter_pan_song = loadSound("Peter Pan.mp3");
}

function draw(){
    image(video, 0,0, 700, 800);
}