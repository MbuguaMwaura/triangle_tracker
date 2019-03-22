var length1 = [parseFloat(prompt('Input length1'))]
  var length2 = [parseFloat(prompt('Input length2'))]
  var length3 = [parseFloat(prompt('Input length3'))]

 var ab = length1.concat(length2);

 var abc = ab.concat(length3) ;

var sorted = abc.sort(function (d, e) {
return d - e;
})

var a = sorted[0]
var b = sorted[1]
var c = sorted[2]

var lengthab = a + b;


if(lengthab < c){
  	alert("ERROR! Not a triangle")
  }
else if(a === b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Equilateral Triangle')
  alert('Equilateral Triangle')
}else if(a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Isosceles Triangle')
  alert('Isoceles Triangle')
}else if(a !== b && b!== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0){
  console.log('Scalene Triangle')
  alert('Scalene Triangle')
}else { alert ("Invalid measurements. Kindly re-evaluate your figures.")};
