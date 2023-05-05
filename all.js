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
    
console.log(greater(2,100))

// Write a function that takes in a array of numbers as a parameter and returns
//  the second largest number in the array
// function largestNumber(numbers) {
//     let empty=[]
//     for (let n = 0; n < numbers.length; n++) {
//         if (n>=numbers) {
//           return empty.push(n) 
//         }
//         else{
//             return null
//         }
//     }
//         n++
// }
// let numbers=[90,56,78,34,78,23,1]
// console.log(largestNumber(numbers))

function largestNumber(numbers) {
   let largest=numbers.sort()
   return largest
}
console.log(largestNumber(90,56,78,34,78,23,1))

// Write a function that takes a string as a parameter and returns true if the string
//  is a palindrome and false otherwise
function palindrome(word){
    if (word.revese===word){
        return "True"
    }
    else{
        return "False"
    }

}
console.log(palindrome("madam"))