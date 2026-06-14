function removeFromArray (arr, itemToRemoved){
return arr.filter(item => item !== itemToRemoved);
}
const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result);