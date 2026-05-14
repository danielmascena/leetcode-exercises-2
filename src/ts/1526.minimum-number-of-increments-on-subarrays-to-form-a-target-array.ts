import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1526 lang=typescript
 *
 * [1526] Minimum Number of Increments on Subarrays to Form a Target Array
 */

// @lc code=start
function minNumberOperations(target: number[]): number {
  const n = target.length;
  const { min } = Math;
  const pos = new Array<number>(n);
  let [curr] = target;

  for (let i = 1; i < n; i++) {}
}
// @lc code=end

expect(minNumberOperations([1, 2, 3, 2, 1])).toBe(3);
expect(minNumberOperations([3, 1, 1, 2])).toBe(4);
expect(minNumberOperations([3, 1, 5, 4, 2])).toBe(7);
