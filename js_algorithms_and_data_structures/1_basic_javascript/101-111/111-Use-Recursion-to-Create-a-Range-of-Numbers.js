// Use Recursion to Create a Range of Numbers

/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    var range = []
    if(startNum > endNum){
        return range
    } else {
        range = rangeOfNumbers(startNum+1, endNum)
        range.unshift(startNum)
        return range
    }
}

console.log(rangeOfNumbers(1,5))