import { expect } from "bun:test";

const { log: LOG } = console;
/*
 * @lc app=leetcode id=1504 lang=typescript
 *
 * [1504] Count Submatrices With All Ones
 */

// @lc code=start
function numSubmat(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0]?.length!;
  const { min } = Math;
  const g = new Map<string, number>();
  let ans = 0;

  for (let i = 0; i < m; i++) {
    const row = mat[i]!;

    for (let j = n - 1, n1 = 0; j >= 0; j--) {
      if (row[j]) {
        g.set(`${i},${j}`, ++n1);
      } else {
        n1 = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    const row = mat[i]!;

    for (let j = 0; j < n; j++) {
      const k = `${i},${j}`;

      if (g.has(k)) {
        let t = g.get(k)!;
        ans += t;

        for (let z = i + 1; z < m; z++) {
          const vk = `${z},${j}`;

          if (!g.has(vk)) {
            break;
          }
          t = min(t, g.get(vk)!);
          ans += t;
        }
      }
    }
  }
  return ans;
}
// @lc code=end
expect(
  numSubmat([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
).toBe(13);
expect(
  numSubmat([
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
  ])
).toBe(24);
expect(
  numSubmat([
    [1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
  ])
).toBe(17);
expect(
  numSubmat([
    [1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1],
  ])
).toBe(96);

/**
 * Accepted
 * 73/73 cases passed (261 ms)
 * Your runtime beats 8.33 % of typescript submissions
 * Your memory usage beats 8.33 % of typescript submissions (70.8 MB)
 */
