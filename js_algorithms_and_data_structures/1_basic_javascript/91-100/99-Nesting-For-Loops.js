// Nesting For Loops

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line

    for(var a = 0; a < arr.length ; a++){
        for(var b = 0; b < arr[a].length; b++){
            product *= arr[a][b]
        }
    }
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
