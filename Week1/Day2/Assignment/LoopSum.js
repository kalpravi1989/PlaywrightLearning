/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/


let num;
function loopsum(num){
    let sum;
    for(let i=0;i<=num;i++){
      sum=sum+i;
    }
    return sum;

}
let givenNumber=7;
let result=loopsum(givenNumber);
console.log(result);