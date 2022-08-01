function twoNumberSum(array, targetSum) {
  const nums = {};
  for (let i of array) {
    let _dif = targetSum - i;
    if (_dif in nums) return [_dif, i];
    nums[i] = true;
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// O(n^2) time | O(1) space
function NumSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = 0; j < array.slice(i + 1, array.length); j++) {
      let secondNum = array[j];
      if (firstNum + secondNum == targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

console.log(NumSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
