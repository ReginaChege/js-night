// Write a function that takes a string as input and
//  returns the number of vowels in the string.
function vowelNums(names){
    let vowels=['a','e','o','i','u']
    let count=0

    for(let i = 0;i<names.length;i++){
        
        if(vowels.includes(names[i])){
           
           count++;
        }
       
    }
    return count;
}
let names="Regina"
console.log(vowelNums((names)))

// Write a function that takes an array of numbers as input and 
// returns the sum of all the numbers.
function addition(a,b,c,d,e,f){
    let sum=a+b+c+d+e+f
    return sum
}
console.log(addition(3,4,5,6,7,4))

// Write a function that takes two numbers as input and returns true 
// if their sum is greater than 100, and false otherwise.
function greater(a,b){
    let n=a+b
    for(n>=1;n<=100;n++){
        }   
    if (n>=100){
        return "False"
    }
    else{
        return "True"
    }
        }
    
console.log(greater(2,4))
