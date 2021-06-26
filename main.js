function preload(){

}


function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}
function modelloaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    
    if(results.length > 0){
    console.log(results);
console.log("Nose x -" + results[0].pose.nose.x)
console.log("Nose y -" + results[0].pose.nose.y)
    }
}

function draw(){
image(video, 0,0, 300, 300);

}






function take_snapshot(){
    save("filter_image.png")
}