import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2639 lang=typescript
 *
 * [2639] Find the Width of Columns of a Grid
 */

// @lc code=start
function findColumnWidth(grid: number[][]): number[] {
  const { max } = Math;
  const n = grid[0]?.length ?? 0;
  const ans = Array(n).fill(0);

  for (const row of grid) {
    for (let i = 0; i < n; i++) {
      ans[i] = max(ans[i], String([row[i]]!).length);
    }
  }
  return ans;
}
// @lc code=end

expect(findColumnWidth([[1], [22], [333]])).toEqual([3]);
expect(
  findColumnWidth([
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
  ])
).toEqual([3, 1, 2]);

/**
 * Accepted
 * 50/50 cases passed (12 ms)
 * Your runtime beats 11.11 % of typescript submissions
 * Your memory usage beats 11.11 % of typescript submissions (61.7 MB)
 */
