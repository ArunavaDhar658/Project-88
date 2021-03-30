var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("https://th.bing.com/th/id/R9f6b918ac1e7d35c1d09d4f019a51419?rik=PIh15IDoCnynng&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Qt3VjBXu6EU%2fUHrR9CcUJrI%2fAAAAAAAAAmQ%2fQXFFuyI1xNg%2fs1600%2fSuperman-Cartoon-Superhero.jpg&ehk=KLb1gjVJl6tKKK%2bqIrGuv88iN8cXS7cvlwojxvTAD0M%3d&risl=&pid=ImgRaw",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set
       (
           {
               top:player_y,
               left:player_x  
           }
       );
       canvas.add(player_object);
        }
    );
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set
        (
            {
              top:player_y,
              left:player_x
            }
        );
        canvas.add(block_image_object);
    }
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shift== true&& keyPressed== '80')
    {
        console.log=("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;    
    }
    if(e.shift== true&& keyPressed== '77')  
    {
        console.log=("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed== '70')
    {
        new_image=('https://cdn.imgbin.com/6/0/19/imgbin-iron-man-hd-marvel-iron-man-mask-6DMV6KwnCmK8V3e4Kedubvq3z.jpg');
        console.log("f");
        } 
        if(keyPressed== '66')
        {
            new_image=('https://th.bing.com/th/id/OIP.l-4rXVW4j9RKvvUd81wsbAHaLe?pid=ImgDet&rs=1');
            console.log("b");
        }
        if(keyPressed== '76')
        {
            new_image=('https://th.bing.com/th/id/OIP.rBMqZ_Ddn8E158CwlyRWDAAAAA?pid=ImgDet&rs=1');
            console.log("l");
        }
        if(keyPressed== '72')
        {
            new_image=('https://th.bing.com/th/id/OIP.5d0podInk8GwrTop5zEGuQHaN8?pid=ImgDet&rs=1');
             console.log("h");
        }
        if(keyPressed== '82')
        {
            new_image=('https://th.bing.com/th/id/Rd7f61d08f3ad62886960f193d9043fc8?rik=9mFWgQmqmf%2fyiA&riu=http%3a%2f%2fwww.sideshowtoy.com%2fwp-content%2fuploads%2f2014%2f03%2fX5iT1M8a_300177_press13.jpg&ehk=jchb0dPcQ3oj1I7trPckTJ8W26OmWDdUxhiBY9OETxY%3d&risl=&pid=ImgRaw');
            console.log("r");
        }
        if(keyPressed== '38')
        {
               up();
               console.log("up");
        } 
        if(keyPressed== '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed== '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed== '39')
        {
            right();
            console.log("right");
        }
}
function up()
{
    if(player_y>=0)
{
player_y=player_y - block_image_height;
console.log("block image height =" + block_image_height);
console.log("When Up Arrow Key Is Pressed,X="+player_x+",Y="+player_y);
canvas.remove(player_object);
player_update();
}
}
function down()
{
    if(player_y<=500)
    {
        player_y= player_y + block_image_height;
         console.log("block image height=" + block_image_height);
         console.log("When Down Arrow Key Is Pressed,X =" + player_x+", Y =" + player_y);
         canvas.remove(player_object);
         player_update();
    }
}
function left()
{
    if(player_x>0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left Arrow Key Is Pressed,X =" + player_x +", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When Right Arrow Key Is Pressed,X =" + player_x +", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}