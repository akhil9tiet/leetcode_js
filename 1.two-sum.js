/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		let currVal = nums[i];
		if (currVal in hash) {
			return [hash[currVal], i];
		} else {
			let diff = target - currVal;
			hash[diff] = i;
		}
	}
	return null;
};
// @lc code=end
