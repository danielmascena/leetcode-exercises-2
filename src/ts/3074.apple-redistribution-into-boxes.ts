import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3074 lang=typescript
 *
 * [3074] Apple Redistribution into Boxes
 */

// @lc code=start
function minimumBoxes(apple: number[], capacity: number[]): number {
  const total = apple.reduce((a, c) => a + c, 0);
  let capbox = 0;
  let ans = 0;
  capacity.sort((a, b) => b - a);

  for (
    let idx = 0, len = capacity.length;
    capbox < total && idx < len;
    idx++, ans++
  ) {
    capbox += capacity[idx]!;
  }
  return ans;
}
// @lc code=end

expect(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])).toBe(2);
expect(minimumBoxes([5, 5, 5], [2, 4, 2, 7])).toBe(4);

/**
 * Accepted
 * 565/565 cases passed (1 ms)
 * Your runtime beats 57.14 % of typescript submissions
 * Your memory usage beats 57.14 % of typescript submissions (57.8 MB)
 */
