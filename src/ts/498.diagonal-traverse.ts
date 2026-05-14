import { expect } from "bun:test";
/*
 * @lc app=leetcode id=498 lang=typescript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0]?.length!;
  const ttl = n * m;
  const ans = new Array<number>(ttl);
  const verifyDirection = (y: number) =>
    y < 0 || x >= n ? 1 : y >= m || x < 0 ? -1 : 0;
  let y = 0;
  let x = 0;
  let d = -1;
  let i = 0;

  while (i < ttl) {
    const num = mat?.[y]?.[x];
    let cg: number;
    ans[i++] = num!;
    x += -d;
    y += d;

    if ((cg = verifyDirection(y))) {
      d = cg;

      if (cg > 0) {
        y++;

        if (x >= n) {
          x--;
          y++;
        }
      } else {
        x++;

        if (y >= m) {
          y--;
          x++;
        }
      }
    }
  }

  return ans;
}
// @lc code=end
expect(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
expect(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
).toEqual([1, 2, 3, 4]);
expect(
  findDiagonalOrder([
    [2, 5],
    [8, 4],
    [0, -1],
  ])
).toEqual([2, 5, 8, 0, 4, -1]);

/**
 * Accepted
 * 32/32 cases passed (2 ms)
 * Your runtime beats 82.95 % of typescript submissions
 * Your memory usage beats 97.67 % of typescript submissions (61.3 MB)
 */
