import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1008 lang=typescript
 *
 * [1008] Construct Binary Search Tree from Preorder Traversal
 */

class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function bstFromPreorder(preorder: number[]): TreeNode | null {
  const head: TreeNode | null = new TreeNode(preorder.shift());
  const stk: (TreeNode | null)[] = [head];

  while (preorder.length && stk.length) {
    const [v = 0] = preorder;
    let [node = null] = stk;

    while (stk.length && v > stk[0]!?.val) {
      node = stk.shift() ?? null;
    }
    if (node && v > node.val) {
      const tn = new TreeNode(v);
      node.right = tn;
      stk.unshift(tn);
      preorder.shift();
    } else if (node && v < node.val) {
      const tn = new TreeNode(v);
      node.left = tn;
      stk.unshift(tn);
      preorder.shift();
    }
  }
  return head;
}
// @lc code=end
function _t(head: TreeNode | null): (number | null)[] {
  const ans: (number | null)[] = [];
  const stk: (TreeNode | null)[] = [head];

  while (stk.length) {
    const node = stk.shift();

    if (node instanceof TreeNode) {
      const { val, left, right } = node;
      ans.push(val);
      if (left) {
        stk.push(left);
      }
      if (right) {
        stk.push(right);
      }
    } else {
      ans.push(null);
    }
  }
  return ans;
}
expect(_t(bstFromPreorder([1]))).toContainAllValues([1]);
expect(_t(bstFromPreorder([8, 5, 1, 7, 10, 12]))).toContainAllValues([
  8,
  5,
  10,
  1,
  7,
  null,
  12,
]);
expect(_t(bstFromPreorder([1, 3]))).toContainAllValues([1, null, 3]);

/**
 * Accepted
 * 111/111 cases passed (2 ms)
 * Your runtime beats 7.41 % of typescript submissions
 * Your memory usage beats 11.11 % of typescript submissions (58.2 MB)
 */
