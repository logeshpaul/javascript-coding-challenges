/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // edge cases
  if(nums.length < 2) {
    return "Invalid input";
  }

  var position = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position++] = nums[i];
    }
  }

  for (i = position; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

moveZeroes([0,1,0,3,12]);