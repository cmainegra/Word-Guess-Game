// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(50,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

var solutionList = ["javascript", "spanish", "english", "french"];
var solutionSelector = Math.floor(Math.random() * solutionList.length);
console.log(solutionSelector);
var solutionCurrent = solutionList[solutionSelector];
console.log(solutionCurrent);
var solutionCheck = solutionCurrent.split("");
console.log(solutionCheck);
var userInput = console.log(document.onkeyup);
var userCheck = solutionCurrent.includes(userInput);
console.log(userCheck);
