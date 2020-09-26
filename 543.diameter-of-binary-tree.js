/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let ans = 0;
var diameterOfBinaryTree = function (root) {
  ans=0;
	depth(root);
	return ans;
};

const depth = (node) => {
	if (!node) {
		return 0;
	}

	let l = depth(node.left);
	let r = depth(node.right);
	ans = Math.max(ans, l + r);
	return 1+Math.max(l, r);
};
// @lc code=end
