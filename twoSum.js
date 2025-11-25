/**
 * 两数之和
 *
 * @param {array} nums 整数数组
 * @param {number} target 整数目标值(和)
 * @returns {array} 返回和为目标值的数字的下标
 * @example
 * nums = [2,7,11,15], target = 9
 * twoSum(nums, target); // 输出: [0, 1]
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      console.log([map.get(complement), i]);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

let nums = [2, 7, 11, 15];
twoSum(nums, 9);
