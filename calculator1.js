
let firstNumber = prompt ("pleasse enter the first Number"); 
let secondNumber = prompt ("Pliease enter the second Number"); 
let  operator = prompt ("Please enter the Operator ");
let result;      

if (operator === "+"){ 
  result = Number(firstNumber) + Number(secondNumber);
  console.log(result)
}

else if(operator === "-"){
  result = Number(firstNumber) - Number(secondNumber);
  console.log(result)
}

else if(operator==="*"){
  result = Number(firstNumber) * Number(secondNumber);
  console.log(result)
}

else if(operator==="/"){
  result = Number(firstNumber) / Number(secondNumber);
  console.log(result)
}

else {
  console.log("Please check your input")
}

