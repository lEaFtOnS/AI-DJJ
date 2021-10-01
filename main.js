Song="";
LeftWristX=0;
LeftWristY=0;
RightWristY=0;
RightWristX=0;
function preload() {
    Song=loadSound("music.mp3")
    
}

function setup() {
 canvas=createCanvas(500,500)   
 canvas.position(500,200)
 Video=createCapture(VIDEO)
 Video.hide()
 posenet=ml5.poseNet(Video,modelLoaded)
 posenet.on("pose",gotPoses)
}
function gotPoses(result) {
 console.log(result)

 LeftWristX=result[0].pose.leftWrist.x
 LeftWristY=result[0].pose.leftWrist.y
 RightWristY=result[0].pose.rightWrist.y
 RightWristX=result[0].pose.rightWrist.x
}
function modelLoaded() {
console.log("yay model is working")
}
function draw() {
    image(Video,0,0,500,500)
    fill("red")
    circle(RightWristX,RightWristY,30)
    circle(LeftWristX,LeftWristY,30)   
    NUMBER_LW=Number(LeftWristY)
    Volume=(floor(LeftWristY)/500)   
document.getElementById("volume_value").innerHTML=Volume
song.setVolume(Volume)
   if (rightWristY>0 && RightWristY<100) {
   
document.getElementById("speed_value").innerHTML="0.51x"
song.rate(.5)
   }
  
  if (rightWristY>100 && RightWristY<200) {
      
document.getElementById("speed_value").innerHTML="1.00x"
song.rate(1)
   
  }
  if (rightWristY>200 && RightWristY<300) {
      
   document.getElementById("speed_value").innerHTML="1.51x"
   song.rate(1.5)
      
     }
     if (rightWristY>300 && RightWristY<400) {
      
      document.getElementById("speed_value").innerHTML="2.00x"
      song.rate(2)
         
        }
       }
       if (rightWristY>400 && RightWristY<500) {
        
        document.getElementById("speed_value").innerHTML="2.51x"
        song.rate(2.5)
           
          }

   
}
function play(){
Song.play()
Song.setVolume(1.0)
Song.rate(1.0)

} 