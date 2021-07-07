let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let bottom = 250;
let goUndergroup = 250;
let reverse = false;


function animateGo(){
  requestAnimationFrame(animateGo);
    if(bottom <= 500 && goUndergroup >= 0 && !reverse){
      if(bottom == 0){
        reverse = true;
      }
      
      bottom--;
      goUndergroup++;
    }else{
      bottom++;
      goUndergroup--;
      
      if(bottom == 500){
        reverse = false;
      }
    }
  
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = 'white';
      context.lineWidth = 6;
      context.beginPath();
      context.moveTo(0, 250);
      context.quadraticCurveTo(100,bottom, 200, 250);
      context.quadraticCurveTo(300,goUndergroup, 400, 250);
      context.quadraticCurveTo(500,bottom, 600, 250);
      context.stroke();
    
}

animateGo();
