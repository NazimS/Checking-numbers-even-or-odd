
// even or odd
const a = document.getElementById("a");
const btn = document.getElementById("btn")
const result = document.getElementById("result")

btn.onclick = function() {
   if (+a.value % 2 ==0) {
       document.getElementById('result').value = "is even";
} else {
   document.getElementById('result').value = "is odd";
}  
}

//plus or minus
const a1 = document.getElementById("a1");
const btn1 = document.getElementById("btn1")
const result1 = document.getElementById("result1")

btn1.onclick = function() {
   if (+a1.value > 0) {
       document.getElementById('result1').value = "is Plus";
} else if (+a1.value < 0) {
       document.getElementById('result1').value = "is Minus"
} else {
   document.getElementById('result1').value = "is zero";
}  
} 

// division, quotient and remainder
const a2 = document.getElementById("a2");
const b = document.getElementById("b");
const btn2 = document.getElementById("btn2");
const result2 = document.getElementById("result2");

btn2.onclick = function() {
let x = Math.floor(a2.value / b.value);
let y = a2.value % b.value;
result2.innerHTML = "quotient - " + x + ", remainder -  " + y + ".";
}