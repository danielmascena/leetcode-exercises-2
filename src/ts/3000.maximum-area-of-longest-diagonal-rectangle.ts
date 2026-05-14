import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3000 lang=typescript
 *
 * [3000] Maximum Area of Longest Diagonal Rectangle
 */

// @lc code=start
function areaOfMaxDiagonal(dimensions: number[][]): number {
  const { sqrt, max } = Math;
  let diagLgth = 0;
  let area = 0;
  dimensions.forEach(([lgth = 0, wdth = 0]) => {
    const dl = sqrt(lgth * lgth + wdth * wdth);

    if (dl > diagLgth) {
      diagLgth = dl;
      area = lgth * wdth;
    } else if (dl === diagLgth) {
      area = max(area, lgth * wdth);
    }
  });
  return area;
}
// @lc code=end

expect(
  areaOfMaxDiagonal([
    [9, 3],
    [8, 6],
  ])
).toBe(48);
expect(
  areaOfMaxDiagonal([
    [3, 4],
    [4, 3],
  ])
).toBe(12);
expect(
  areaOfMaxDiagonal([
    [6, 5],
    [8, 6],
    [2, 10],
    [8, 1],
    [9, 2],
    [3, 5],
    [3, 5],
  ])
).toBe(20);

/**
 * Accepted
 * 816/816 cases passed (2 ms)
 * Your runtime beats 42.86 % of typescript submissions
 * Your memory usage beats 71.43 % of typescript submissions (57.6 MB)
 */
