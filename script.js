//Additon Operation//
plusButton=document.getElementById("plusButton");
plusOperation = function() {
  num1=document.getElementById("num1");
  num2=document.getElementById("num2");

  console.log(num1,num2);

sum= parseInt(num1.value)+parseInt(num2.value);

result = document.getElementById("result");
result.innerText = sum;

} 

plusButton.addEventListener("click", plusOperation);

//Subtraction Operation//
minusButton=document.getElementById("minusButton");
minusOperation = function() {
  num1=document.getElementById("num1");
  num2=document.getElementById("num2");

  console.log(num1,num2);

sum= parseInt(num1.value)-parseInt(num2.value);

result = document.getElementById("result");
result.innerText = sum;

} 

minusButton.addEventListener("click", minusOperation);

//Multiplication Operation//
mulButton=document.getElementById("mulButton");
mulOperation = function() {
  num1=document.getElementById("num1");
  num2=document.getElementById("num2");

  console.log(num1,num2);

sum= parseInt(num1.value)*parseInt(num2.value);

result = document.getElementById("result");
result.innerText = sum;

} 

mulButton.addEventListener("click", mulOperation);

//Division Operation//
divButton=document.getElementById("divButton");
divOperation = function() {
  num1=document.getElementById("num1");
  num2=document.getElementById("num2");

  console.log(num1,num2);


if (num2.value==0){
  alert("You cannot divide by zero.");
  result.innerText = "Undefined";
  }else {

sum= parseInt(num1.value)/parseInt(num2.value);

result = document.getElementById("result");
  result.innerText = sum;}}
  divButton.addEventListener("click", divOperation);
  