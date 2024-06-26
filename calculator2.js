let firstNumber = Number(prompt ("please enter the first Number")); 
let secondNumber = Number(prompt ("Please enter the second Number")); 
let  operator = prompt ("Please enter the Operator ");
let result; 
switch(operator){
    case "+":
        console.log(result = firstNumber + secondNumber)
        break
    case "-":   
        console.log(result = firstNumber - secondNumber)
        break
    case "*":
        console.log(result = firstNumber * secondNumber)
        break
    case "/":
        console.log(result = firstNumber / secondNumber)
        break
    default :
        console.log("Check your Inputs")
        break
}
