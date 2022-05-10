noseX = 0;
noseY = 0;
function preload()
{
Mush = loadImage('https://i.postimg.cc/fTfJw6h1/Mustache.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center() ;
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(Mush, noseX, noseY, 80, 35);
}

function take_snapsho()
{
    save('my_filter_image.png');
}

function modelLoaded() 
{
console.log('poseNet is initialized');
}
function take_snapshot()
{
    save('my_filter_image.png');
}
function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x-40;
noseY = results[0].pose.nose.y;
}
}
