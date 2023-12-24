function addNumbers(num1, num2){
    console.log(arguments);
    let total = 0;
    for(const arg of arguments){
        total = total + arg;
    }
    return total;
}

const sum = addNumbers(10,20);
console.log(sum);
