import { expect } from "bun:test";
import { construct, reconstruct, TreeNode } from "./utils/utils";
/*
 * @lc app=leetcode id=998 lang=typescript
 *
 * [998] Maximum Binary Tree II
 */

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

function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }
  const nodes: TreeNode[] = [];
  const inorder = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    inorder(node.left);
    nodes.push(new TreeNode(node.val));
    inorder(node.right);
  };
  const mount = (node: TreeNode, idx: number, len: number): TreeNode => {
    const nx = nodes[idx]!;
    if (nx.val > node.val) {
      nx.left = node;
      mount(nx, idx + 1, len);
    } else {
      node.right = mount(nx, idx + 1, len);
    }
  };
  inorder(root);
  nodes.push(new TreeNode(val));
  console.log(nodes);
}
// @lc code=end

expect(
  construct(insertIntoMaxTree(reconstruct([4, 1, 3, null, null, 2]), 5))
).toEqual([5, 4, null, 1, 3, null, null, 2]);
expect(
  construct(insertIntoMaxTree(reconstruct([5, 2, 4, null, 1]), 3))
).toEqual([5, 2, 4, null, 1, null, 3]);
expect(
  construct(insertIntoMaxTree(reconstruct([5, 2, 3, null, 1]), 4))
).toEqual([5, 2, 4, null, 1, 3]);
expect(construct(insertIntoMaxTree(reconstruct([2]), 1))).toEqual([2, null, 1]);
