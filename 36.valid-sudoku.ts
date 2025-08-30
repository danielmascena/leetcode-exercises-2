import { expect } from "bun:test";
/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, (_) => new Set<string>());
  const cols = Array.from({ length: 9 }, (_) => new Set<string>());

  for (let i = 0; i < 9; i++) {
    const row = rows[i];

    for (let j = 0; j < 9; j++) {
      const cel = board?.[i]?.[j]!;
      if (cel !== ".") {
        const col = cols[j];

        if (row?.has(cel) || col?.has(cel)) {
          return false;
        }
        col?.add(cel);
        row?.add(cel);
      }
    }
  }
  for (let i = 0, bkt = new Set<string>(); i <= 6; i += 3) {
    const r1 = board[i]!;
    const r2 = board[i + 1]!;
    const r3 = board[i + 2]!;

    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0) {
        bkt.clear();
      }
      const c1 = r1[j]!;
      const c2 = r2[j]!;
      const c3 = r3[j]!;

      if (c1 !== ".") {
        if (bkt.has(c1)) {
          return false;
        }
        bkt.add(c1);
      }
      if (c2 !== ".") {
        if (bkt.has(c2)) {
          return false;
        }
        bkt.add(c2);
      }
      if (c3 !== ".") {
        if (bkt.has(c3)) {
          return false;
        }
        bkt.add(c3);
      }
    }
  }
  return true;
}
// @lc code=end

expect(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
).toBeTrue();
expect(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
).toBeFalse();

/**
 * Accepted
 * 507/507 cases passed (6 ms)
 * Your runtime beats 53.22 % of typescript submissions
 * Your memory usage beats 69.14 % of typescript submissions (58.8 MB)
 */
