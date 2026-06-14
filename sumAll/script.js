function sumAll(num1, num2){
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    let total = 0;
    for(let i =min;i<=max;i++){
        total += i
    }
    return total;
}
console.log(sumAll(1, 4));