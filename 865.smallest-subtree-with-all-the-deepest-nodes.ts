import { expect } from "bun:test";
import { reconstruct, construct, TreeNode } from "./utils/utils";
/*
 * @lc app=leetcode id=865 lang=typescript
 *
 * [865] Smallest Subtree with all the Deepest Nodes
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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  const pns = new Map<TreeNode, TreeNode | null>([[root, null]]);
  const mq = new Map<TreeNode, number>();
  const md = new Map<TreeNode, number>();
  let dln: TreeNode[] = [];
  let dlv = 0;
  let ansd = 0;
  let ansn = root;
  const dfs = (node = root, depth = 0) => {
    if (!node) {
      return;
    }
    const { left, right } = node;
    md.set(node, depth);

    if (left) {
      pns.set(left, node);
    }
    if (right) {
      pns.set(right, node);
    }
    if (depth === dlv) {
      dln.push(node);
    } else if (depth > dlv) {
      dlv = depth;
      dln = [node];
    }
    dfs(left, depth + 1);
    dfs(right, depth + 1);
  };
  dfs();
  //console.log(pns);

  for (const orig of dln) {
    let node: TreeNode | null = orig;

    while (node) {
      mq.set(node, (mq.get(node) ?? 0) + 1);
      node = pns.get(node) ?? null;
    }
  }
  const qt = dln.length;

  for (const [node, qnty] of mq) {
    const depth = md.get(node) ?? 0;

    if (qnty === qt && depth > ansd) {
      ansn = node;
      ansd = depth;
    }
  }
  return ansn;
}
// @lc code=end

expect(
  construct(
    subtreeWithAllDeepest(reconstruct([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]))
  )
).toEqual([2, 7, 4]);
expect(construct(subtreeWithAllDeepest(reconstruct([1])))).toEqual([1]);
expect(
  construct(subtreeWithAllDeepest(reconstruct([0, 1, 3, null, 2])))
).toEqual([2]);
expect(
  construct(
    subtreeWithAllDeepest(
      reconstruct([0, 3, 1, 4, null, 2, null, null, 6, null, 5])
    )
  )
).toEqual([0, 3, 1, 4, null, 2, null, null, 6, null, 5]);

/*
Accepted
58/58 cases passed (3 ms) [WARN] Failed to get runtime percentile.
*/
