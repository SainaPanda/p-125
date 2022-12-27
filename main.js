rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(600, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');

    document.getElementById("square_side").innerHTML= "Width and height will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(rightWristX, rightWristY, leftWristX, leftWristY, 100);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
    }
}