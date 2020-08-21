/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const set = new Set();
	let l = 0,
		max = 0;
	for (let r = 0; r < s.length; ++r) {
		const rightChar = s.charAt(r);
		while (set.has(rightChar)) {
			const leftChar = s.charAt(l++);
			set.delete(leftChar);
		}
		set.add(rightChar);
		max = Math.max(max, r - l + 1);
	}
	return max;
};
// @lc code=end
