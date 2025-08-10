import { expect } from "bun:test";
import { construct, reconstruct, TreeNode } from "./utils/utils";
/*
 * @lc app=leetcode id=998 lang=typescript
 *
 * [998] Maximum Binary Tree II
 */

let count = 1;

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
  const neoNode = new TreeNode(val);
  let parent = new TreeNode();
  parent.left = root;
  const fakeRoot = parent;
  let node = root;
  let side: "left" | "right" = "left";

  while (node) {
    if (node.val > val) {
      const { left, right } = node;

      if (right && right.val > val) {
        side = "right";
        parent = node;
        node = right;
      } else if (left && left.val > val) {
        side = "left";
        parent = node;
        node = left;
      } else if (left || right) {
        parent = node;
        neoNode.left = right ?? left;
        node = null;
        side = "right";
      } else {
        parent = node;
        node = null;
      }
    } else {
      neoNode.left = node;
      node = null;
    }
  }
  parent[side] = neoNode;
  console.log(count++, fakeRoot.left);
  return fakeRoot.left;
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
