var x = document.getElementById("A");
var xtx = x.getContext("2d");
xtx.moveTo(0, 0);
xtx.lineTo(500, 500);
xtx.stroke();

//for second line
var xtx2 = x.getContext("2d");
xtx2.moveTo(500, 0);
xtx2.lineTo(0, 500);
xtx2.stroke();

//for third line

var xtx3 = x.getContext("2d");
xtx3.moveTo(0, 250);
xtx3.lineTo(250, 0);
xtx3.stroke();

//for the circle
var circle = document.getElementById("C");
var ctx = circle.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "#000000";
ctx.fill();

//for rectangle
var R = document.getElementById("rectangle");
var Rtx = R.getContext("2d");
Rtx.fillStyle = "#FF0000";
Rtx.fillRect(0, 0, 500, 500);

//for triangle

var t = document.getElementById("triangle").getContext("2d");
t.fillStyle = "purple";
t.beginPath();
t.moveTo(150, 50);
t.lineTo(50, 250);
t.lineTo(250, 250);
t.fill();