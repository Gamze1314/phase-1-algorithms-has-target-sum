function hasTargetSum(array, target) {
  const numMap = {};
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const neededValue = target - currentNumber;
    if (numMap[neededValue] !== undefined) {
      // If the complement is found in the map, we have a pair that sums to the target
      return true;
    }
    numMap[currentNumber] = i;
  }
  return false;
}


hasTargetSum([3, 8, 12, 4, 11, 7],10)

/* 
  Write the Big O time complexity of your function here
  // O(n+1) , can be reduced to O(n) = n steps
*/

/* 
  Add your pseudocode here
  // for (i =0; i<= arr.length; i++)
  // arr[i] + arr[i+1] = T
  // currentNumber = arr[i]
  // neededValue = Target - currentNumber
  // return true
  // else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");

  
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
