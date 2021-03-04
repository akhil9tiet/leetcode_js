/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	const cmb = climb();
	return cmb(n);
};

function climb() {

  //solved using DP
	let cache = {};

	return function fibo(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n === 1) {
				return 1;
			}
			if (n > 1 && n < 4) {
				return n;
			} else {
				cache[n] = fibo(n - 2) + fibo(n - 1);
				return cache[n];
			}
		}
	};
}
// @lc code=end

