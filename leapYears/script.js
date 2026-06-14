function leapYears(year){
    const divByFour =year%4 ===0;
    const divByOneHundred = year%100 ===0;
    const divByFourHundred = year%400 ===0;
    if (divByFour && (!divByOneHundred || divByFourHundred)){
        return "Leap year";
    }else {
        return "Not a leap year"; 
    }
}
console.log(leapYears(2000));