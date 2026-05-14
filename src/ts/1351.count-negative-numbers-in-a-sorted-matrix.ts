import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1351 lang=typescript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
function countNegatives(grid: number[][]): number {
  //return grid.flat().filter((v) => v < 0).length;
  const n = grid.length;
  const m = grid[0]?.length;
  const r = new Array<number>(m).fill(n);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] < 0) {
        r[j] = i;
      }
    }
  }
  return r.reduce((a, c) => n - c + a, 0);
}

// @lc code=end

expect(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
).toBe(8);
expect(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
).toBe(0);

/*
#1
Accepted
44/44 cases passed (1 ms)
Your runtime beats 49.35 % of typescript submissions
Your memory usage beats 5.19 % of typescript submissions (60.1 MB)

#2
Accepted
44/44 cases passed (4 ms)
Your runtime beats 5.19 % of typescript submissions
Your memory usage beats 14.29 % of typescript submissions (58.4 MB)
*/
