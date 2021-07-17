var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y ,
            left:player_x
        });
canvas.add(player_object);
    })
}

function block_image(get_image)
{
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y ,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log('shift + p');
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;

        document.getElementById('span_width').innerHTML = block_image_width;
        document.getElementById('span_height').innerHTML = block_image_height;
    }
        
if(e.shiftKey == true && keyPressed == '77')
{
    console.log('shift + m');
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;

    document.getElementById("span_width").innerHTML = block_image_width;
    document.getElementById("span_height").innerHTML = block_image_height;
}



if(keyPressed == '38')
{
    up();
    console.log('up')
}   
    if(keyPressed == '40')
{
    down();
    console.log('down')
}

if(keyPressed == '37')
{
    left();
    console.log('left')
}
 if(keyPressed == '39')
 {
     right();
     console.log('right')
 }

 if(keyPressed == '67'){
    block_image("cloud.jpg") 
    console.log('c')
 }

 if(keyPressed == '68')
 {
     block_image("dark_green.png")
     console.log('d')
 }

 if(keyPressed == '71')
 {
     block_image("ground.png")
     console.log('g')
 }

 if(keyPressed == '76')
 {
     block_image("light_green.png")
     console.log('l')
 }

 if(keyPressed == '82')
 {
     block_image("roof.jpg")
     console.log('r')
 }

 if(keyPressed == '84')
 {
     block_image("trunk.jpg")
     console.log('t')
 }

 if(keyPressed == '85')
 {
     block_image("unique.png")
     console.log('u')
 }

 if(keyPressed == '87')
 {
     block_image("wall.jpg")
     console.log('w')
 }

 if(keyPressed == '89')
 {
     block_image("yellow_wall.png")
     console.log('y')
 }
}

function up()
{
    if(player_y > 0)
    {
        player_y = player_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When up arrow is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y < 580)
    {
        player_y = player_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When down arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x > 0)
    {
        player_x = player_x - block_image_width;
        console.log("Block image width = " + player_y);
        console.log("When left arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x < 980)
    {
        player_x = player_x + block_image_width;
        console.log("Block image width = " + player_y);
        console.log("When right arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}