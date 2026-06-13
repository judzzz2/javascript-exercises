function repeat(str, num){
  let string = "";
  if (num<0){
    return 'ERORRE';
  }
else{
  for(let i = 0;i<num;i++){
    string +=str
    
  }return string;
}
}
console.log(repeat('Hey', 3));