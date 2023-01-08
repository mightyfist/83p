
var last_position_of_x, last_position_of_y;
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", mytouchstart);
    
    function my_touchstart(e)
    {

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
        last_position_of_y = e.touches[0].clientY - canvas.offsettop

        console.log("my_touchstart")
    }

        canvas.addEventListener("touchMove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touch_move")
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsettop

        //old same old as the paint web app
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();


        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

