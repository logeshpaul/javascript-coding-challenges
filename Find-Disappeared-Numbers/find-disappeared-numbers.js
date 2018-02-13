// Approach #1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var actual,
      i,
      res = [];
  
  for(i = 0; i < nums.length; i++){
      actual = Math.abs(nums[i]) - 1;
      if(nums[actual] > 0)
          nums[actual] *= -1;
  }
  
  for(i = 0; i < nums.length; i++){
      if(nums[i] > 0)
          res.push(i+1);
  }
  
  return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);


// Approach #2

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // edge cases
  if(nums.length < 1) {
      return "Invalid Input";
  }

  let arrayLength = nums.length;
  let missingNumbers = [];

  for(var i=0; i < arrayLength; i++) {
      let searchValue = i + 1;

      if(!nums.includes(searchValue)) {
          missingNumbers.push(searchValue);
      }
  }

  return missingNumbers;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
