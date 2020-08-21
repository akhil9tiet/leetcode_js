/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function checkInclusion(s1, s2) {
	console.log('Called');
	let map = {};
	let count = s1.length;
	console.log('count', count);

	for (let c of s1) {
		if (!map[c]) {
			map[c] = 0;
		}
		map[c]++;
	}
	console.log('map', map);

	let l = 0;
	let i = 0;

	while (i < s2.length) {
		console.log('i:', i, 'l:', l);
		const c = s2[i];
		console.log('c:', c);
		if (map[c]) {
			if (count === s1.length) l = i;
			map[c]--;
			count--;
			if (count === 0) return true;
			i++;
		} else {
			if (count === s1.length) {
				i++;
			} else {
				map[s2[l]]++;
				count++;
				l++;
			}
		}
	}
	return false;
}
// @lc code=end
