import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3195 lang=typescript
 *
 * [3195] Find the Minimum Area to Cover All Ones I
 */

// @lc code=start
function minimumArea(grid: number[][]): number {
  const { max, min } = Math;
  let r1n = grid.length;
  let r1x = 0;
  let c1n = grid[0]?.length!;
  let c1x = 0;

  grid.forEach((r, i) =>
    r.forEach((c, j) => {
      if (c) {
        r1n = min(r1n, i);
        r1x = max(r1x, i);
        c1n = min(c1n, j);
        c1x = max(c1x, j);
      }
    })
  );
  r1x -= r1n;
  c1x -= c1n;
  return (r1x + 1) * (c1x + 1);
}
// @lc code=end

expect(
  minimumArea([
    [0, 1, 0],
    [1, 0, 1],
  ])
).toBe(6);
expect(
  minimumArea([
    [1, 0],
    [0, 0],
  ])
).toBe(1);

/**
 * Accepted
 * 712/712 cases passed (130 ms)
 * Your runtime beats 7.14 % of typescript submissions
 * Your memory usage beats 85.71 % of typescript submissions (88.5 MB)
 */
