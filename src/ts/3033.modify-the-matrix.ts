import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3033 lang=typescript
 *
 * [3033] Modify the Matrix
 */

// @lc code=start
function modifiedMatrix(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0]?.length;
  const { max } = Math;
  const answer = Array.from({ length: m }, () => new Array<number>(n));
  const cols = new Array(n).fill(-1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const v = matrix[i]?.[j];
      answer[i][j] = v;
      cols[j] = max(v, cols[j]);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === -1) {
        answer[i][j] = cols[j];
      }
    }
  }
  return answer;
}
// @lc code=end

expect(
  modifiedMatrix([
    [1, 2, -1],
    [4, -1, 6],
    [7, 8, 9],
  ])
).toEqual([
  [1, 2, 9],
  [4, 8, 6],
  [7, 8, 9],
]);
expect(
  modifiedMatrix([
    [3, -1],
    [5, 2],
  ])
).toEqual([
  [3, 2],
  [5, 2],
]);

/**
 * Accepted
 * 514/514 cases passed (2 ms)
 * Your runtime beats 78.95 % of typescript submissions
 * Your memory usage beats 26.32 % of typescript submissions (62 MB)
 */
