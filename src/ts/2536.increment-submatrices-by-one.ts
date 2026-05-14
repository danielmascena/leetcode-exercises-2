import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2536 lang=typescript
 *
 * [2536] Increment Submatrices by One
 */

// @lc code=start
function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const ans = Array.from({ length: n }, (_) => new Array<number>(n).fill(0));

  for (const [row1, col1, row2, col2] of queries) {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        ans[i][j]++;
      }
    }
  }
  /*
  const mpos = (y: number, x: number) => y * n + x;
  const size = n * n;
  const mz = Array.from({ length: size }, (_) => [0, 0]);
  const ans = new Array(size).fill(0);

  for (const [row1, col1, row2, col2] of queries) {
    mz[mpos(row1, col1)][0]++;
    mz[mpos(row2, col2)][1]--;
  }
  console.log(mz);

  for (let i = 0, v = 0; i < size; i++) {
    const [v1, v2] = mz[i];
    v += v1;
    ans[i] = v;
    v += v2;
  }
  console.log(ans);
  */
  return ans;
}
// @lc code=end

expect(
  rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ])
).toEqual([
  [1, 1, 0],
  [1, 2, 1],
  [0, 1, 1],
]);
expect(rangeAddQueries(2, [[0, 0, 1, 1]])).toEqual([
  [1, 1],
  [1, 1],
]);

/**
 * Accepted
 * 31/31 cases passed (1148 ms) [WARN] Failed to get runtime percentile.
 */
