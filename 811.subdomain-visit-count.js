/*
 * @lc app=leetcode id=811 lang=javascript
 *
 * [811] Subdomain Visit Count
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
	const hash = {};
	// separate based on comma
	for (let i = 0; i < cpdomains.length; i++) {
		let domain = cpdomain[i].split(' ')[1];
		let count = cpdomain[i].split(' ' )[0];

		if (!hash.domain) {
			hash[domain] = count;
		}
		while (domain.includes('.')) {
			let dotIndex = domain.indexOf('.');
			domain = domain.substring(dotIndex);
			if (!hash.domain) {
				hash[domain] = count;
			} else {
				hash[domain] += count;
			}
		}
	}
	return hash.map((key, value) => [...`${key} ${value}`]);
};

subdomainVisits(['9001 discuss.leetcode.com']);
// @lc code=end
