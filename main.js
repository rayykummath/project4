var mouse_event;
var last_x;
var last_y;
var current_x;
var current_y;
var canvas=document.getElementById("myCanvas");
var canvas_ref=canvas.getContext("2d");
var color="gold";
var line_width=2;

canvas.addEventListener("mousemove",mouse_move);
canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e){
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup",mouse_up);
canvas.addEventListener("mouseleave",mouse_leave);

function mouse_up(e){
    mouse_event="mouseup";
}

function mouse_leave(e){
    mouse_event="mouseleave";
}

function mouse_move(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        console.log("last X and Y coordinates are= "+last_x+","+last_y);
        console.log("current X and Y coordinates are= "+current_x+","+current_y);
        canvas_ref.beginPath(); 
        canvas_ref.strokeStyle=color; 
        canvas_ref.lineWidth=2; 
        canvas_ref.arc(last_x,last_y,40,0,2*Math.PI); 
        canvas_ref.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}