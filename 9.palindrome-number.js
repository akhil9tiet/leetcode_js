/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

//I: number x
//O: boolean
//C: optimize
//E: if number is less than 0, return false. If number less than 10  but greater than 0, return true

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) return false;
	if (x < 10) return true;

	let reverseX = 0;

	while (x > reverseX) {
		reverseX = reverseX * 10 + (x % 10);
		x /= 10;
	}

	return reverseX === x || x === reverseX / 10;
};
// @lc code=end
