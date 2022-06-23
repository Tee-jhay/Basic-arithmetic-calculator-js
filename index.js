const greeting = "Welcome to Simple arithmetic Calculator";
let req = "Which operations do you want to carry out?";
const brk = "  &#128512;"
const operations = {
    "1": "Addition",
    "2": "Subtraction",
    "3": "Multiplication",
    "4": "Division",
    "5": "Quit",

}
let symbols = ['+', '-', '*', '/']
let operateAlert = ''
for (let op in operations) {
    operateAlert += op + ":" + operations[op] + "\n";

}
function performAgain() {
   alert(`Want to do more calculations?\n\n RELOAD THE PAGE`)
    
} 
let init =prompt(`${greeting} \n\n ${req}\n \n${operateAlert}`)
console.log(typeof(init))
let calculate = true;
 do{
    if (init == 1) {
    let firstNumber = prompt(`${operations["1"]}\nEnter First Number:\n`);
    let secondNumber = prompt(`Enter Second Number: \n ${firstNumber} ${symbols[0]}`);
    let result = Number(firstNumber) + Number(secondNumber);
    alert(`${firstNumber} ${symbols[0]} ${secondNumber}\n\nAnswer = ${result}`)
    performAgain()
    break
} else if( init == 2) {
    let firstNumber = prompt(`${operations["2"]}\nEnter First Number:\n`);
    let secondNumber = prompt(`Enter Second Number: \n ${firstNumber} ${symbols[1]}`);
    let result = Number(firstNumber) - Number(secondNumber);
    alert(`${firstNumber} ${symbols[1]} ${secondNumber}\n\nAnswer = ${result}`)
    performAgain()
    break
}else if( init == 3) {
    let firstNumber = prompt(`${operations["3"]}\nEnter First Number:\n`);
    let secondNumber = prompt(`Enter Second Number: \n ${firstNumber} ${symbols[2]}`);
    let result = Number(firstNumber) * Number(secondNumber);
    alert(`${firstNumber} ${symbols[2]} ${secondNumber}\n\nAnswer = ${result}`)
    performAgain()
    break
}
else if( init == 4) {
    let firstNumber = prompt(`${operations["4"]}\nEnter First Number:\n`);
    let secondNumber = prompt(`Enter Second Number: \n ${firstNumber} ${symbols[3]}`);
    let result = Number(firstNumber) / Number(secondNumber);
    alert(`${firstNumber} ${symbols[3]} ${secondNumber}\n\nAnswer = ${result}`)
    performAgain()
    break
}
else if( init == 5) {
    alert("Bye.\n\n Thank you for using simple arithmetic Calculator!")

}
 }while(calculate);