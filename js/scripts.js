
function tracker() {
var length1 = document.getElementById("length1").value;
var length2 = document.getElementById("length2").value;
var length3 = document.getElementById("length3").value;

var x = [parseFloat(length1)];
var y = [parseFloat(length2)];
var z = [parseFloat(length3)];

 var ab = x.concat(y);

 var abc = ab.concat(z) ;

var sorted = abc.sort(function (d, e) {
return d - e;
});

var a = sorted[0];
var b = sorted[1];
var c = sorted[2];

var lengthab = a + b;


if(lengthab < c){
  document.getElementById("output").innerHTML = "Error, not a triangle";
  }
else if(a === b && b === c && a > 0 && b > 0 && c > 0){
  document.getElementById("output").innerHTML = "Equilateral Triangle.";
}else if(a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0){
  document.getElementById("output").innerHTML = "Isosceles Triangle";
}else if(a !== b && b!== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0){
  document.getElementById("output").innerHTML = "Scalene Triangle";;
}else { document.getElementById("output").innerHTML = "Invalid Measurements";};
}

function reset(){
  document.getElementById("myform").reset();
  document.getElementById("output").innerHTML = "Try other figures";
}