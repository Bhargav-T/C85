canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://postimg.cc/9rqYz9HM";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://postimg.cc/9rqYz9HM";
car2_x = 10;
car2_y = 10;

background_image = "https://postimg.cc/p9D2dqqZ";


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground();
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1();
    car1_imgTag.src=car1_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}


function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

window.addEventListener("keydown",my_keydown); 

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
  
    if (key_pressed=="38"){
        up();
        console.log("up");
    }

    if (key_pressed=="40"){
        down();
        console.log("down");
    }

    if (key_pressed=="37"){
        left();
        console.log("left");
    }

    if (key_pressed=="39"){
        right();
        console.log("right");
    }
  
    if (key_pressed=="87"){
        up();
        console.log("w");
    }
  
  if (key_pressed=="65"){
        left();
        console.log("a");
    }
  
  if (key_pressed=="83"){
        down();
        console.log("s");
    }
  
  if (key_pressed=="68"){
        right();
        console.log("d");
    }
}

function up(){
if (car1_y>=0){
    car1_y=car1_y-10;
    uploadBackground();
    uploadcar1();
    uploadcar2();
    console.log("when up arrow is pressed,x="+car1_x+",y="+car1_y);
}
}

function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when down arrow is pressed,x="+car1_x+",y="+car1_y);
    }
    }
    
function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when left arrow is pressed,x="+car1_x+",y="+car1_y);
    }
    }

    
function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when right arrow is pressed,x="+car1_x+",y="+car1_y);
    }
}

  function up(){
if (car2_y>=0){
    car2_y=car2_y-10;
    uploadBackground();
    uploadcar1();
    uploadcar2();
    console.log("when up arrow is pressed,x="+car2_x+",y="+car2_y);
}
  }
function down(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when down arrow is pressed,x="+car2_x+",y="+car2_y);
    }
    }
    
function left(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when left arrow is pressed,x="+car2_x+",y="+car2_y);
    }
    }

    
function right(){
    if (car2_x<=700){
        car2_x=car2_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        console.log("when right arrow is pressed,x="+car2_x+",y="+car1_2);
    }
    }
  if(car1_x>700){
    console.log("car1 Won");
    document.getElementById('game_status'),innerHTML = "Car 1 Won!!"
  }
  
   if(car2_x>700){
    console.log("car2 Won");
    document.getElementById('game_status'),innerHTML = "Car 2 Won!!"