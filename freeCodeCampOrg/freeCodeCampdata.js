// * pushing and unshifting elements to the array

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('three');
    arr.unshift(2);
    arr.unshift('I');
    arr.push(7);
    arr.push('VIII');
    arr.push(9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  