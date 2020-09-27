/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sArr = s.split('');
  let tArr = t.split('');

  sArr.sort();
  let newS = sArr.join('');
  tArr.sort();
  let newT = tArr.join('');

  return newS === newT;
    
};
// @lc code=end

