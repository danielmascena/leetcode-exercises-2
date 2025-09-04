import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3516 lang=typescript
 *
 * [3516] Find Closest Person
 */

// @lc code=start
function findClosest(x: number, y: number, z: number): number {
  const dx = Math.abs(x - z);
  const dy = Math.abs(y - z);
  return dx === dy ? 0 : dx < dy ? 1 : 2;
}
// @lc code=end

expect(findClosest(2, 7, 4)).toBe(1);
expect(findClosest(2, 5, 6)).toBe(2);
expect(findClosest(1, 5, 3)).toBe(0);

/**
 * Accepted
 * 866/866 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 38.71 % of typescript submissions (57.6 MB)
 */
