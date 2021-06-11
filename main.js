function setup(){
    canvas = createCanvas(400,350);
    canvas.position(580,300);
    video = createCapture(VIDEO);
    video.size(550,500)
    video.position(20,250)
    posenet =  ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    background('#969A97');
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result)
    }
}