var mouseEvent ="empty";
var last_position_of_x, last_position_of_y;


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;


canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown(e){
    mouseEvent = "mousedown";
}


canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e){
    mouseEvent = "mousemove";
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_x)
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}



canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
    mouseEvent = "mousedup";
}



canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent = "mouseleave";
}
