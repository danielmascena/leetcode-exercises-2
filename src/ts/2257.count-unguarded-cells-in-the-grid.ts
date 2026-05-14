import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2257 lang=typescript
 *
 * [2257] Count Unguarded Cells in the Grid
 */

// @lc code=start
function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
): number {
  const grid = Array.from({ length: m }, () => new Array(n).fill(0));
  const ans = new Set<string>();
  const rows = new Array(m).fill(-1);
  const cols = new Array(n).fill(-1);

  for (const [y, x] of guards) {
    grid[y][x] = 1;
    rows[y] = x;
    cols[x] = y;
  }
  for (const [y, x] of walls) {
    grid[y][x] = 2;

    if (x < rows[y]) {
      rows[y] = -1;
    }
    if (y < cols[x]) {
      cols[x] = -1;
    }
  }
  console.log(rows, cols);

  for (let i = 0; i < m; i++) {
    let turnon = rows[i] > 0;

    for (let j = 0; j < n; j++) {
      const c = grid[i][j];

      if (c === 1) {
        turnon = true;
      } else if (c === 2) {
        turnon = false;
        ans.add(`${i}-${j}`);
      }

      if (turnon) {
        ans.add(`${i}-${j}`);
      }
    }
  }
  for (let j = 0; j < n; j++) {
    let turnon = cols[j] > 0;

    for (let i = 0; i < m; i++) {
      const c = grid[i][j];

      if (c === 1) {
        turnon = true;
      } else if (c === 2) {
        turnon = false;
        ans.add(`${i}-${j}`);
      }
      if (turnon) {
        ans.add(`${i}-${j}`);
      }
    }
  }
  console.log(ans);
  return m * n - ans.size;
}
// @lc code=end

expect(
  countUnguarded(
    4,
    6,
    [
      [0, 0],
      [1, 1],
      [2, 3],
    ],
    [
      [0, 1],
      [2, 2],
      [1, 4],
    ]
  )
).toBe(7);
expect(
  countUnguarded(
    3,
    3,
    [[1, 1]],
    [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ]
  )
).toBe(4);

expect(
  countUnguarded(
    8,
    9,
    [
      [5, 8],
      [5, 5],
      [4, 6],
      [0, 5],
      [6, 5],
    ],
    [[4, 1]]
  )
).toBe(25);
