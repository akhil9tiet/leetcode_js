/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let hash = {};
	for (let i = 0; i < strs.length; i++) {
		let el = strs[i];
		let sortedEl = el.split('').sort().join('');
		if (!hash[sortedEl]) {
			hash[sortedEl] = [el];
		} else {
			hash[sortedEl] = [...hash[sortedEl], el];
		}
	}
	return Object.values(hash).sort();
};

// @lc code=end

