import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1583 lang=typescript
 *
 * [1583] Count Unhappy Friends
 */

// @lc code=start
function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  const parr = new Array<number>(preferences.length);
  var unhappy = 0;
  pairs.forEach(([x = 0, y = 0]) => ([parr[y], parr[x]] = [x, y]));
  parr.forEach((y, x) => {
    const xpref = preferences[x]!;

    for (const u of xpref) {
      const v = parr[u]!;
      const upref = preferences[u]!;

      if (u === y) {
        break;
      }
      for (const up of upref) {
        if (up === v) {
          break;
        }
        if (up === x) {
          unhappy++;
          return;
        }
      }
    }
  });
  return unhappy;
}
// @lc code=end

expect(
  unhappyFriends(
    4,
    [
      [1, 2, 3],
      [3, 2, 0],
      [3, 1, 0],
      [1, 2, 0],
    ],
    [
      [0, 1],
      [2, 3],
    ]
  )
).toBe(2);
expect(unhappyFriends(2, [[1], [0]], [[1, 0]])).toBe(0);
expect(
  unhappyFriends(
    4,
    [
      [1, 3, 2],
      [2, 3, 0],
      [1, 3, 0],
      [0, 2, 1],
    ],
    [
      [1, 3],
      [0, 2],
    ]
  )
).toBe(4);
expect(
  unhappyFriends(
    4,
    [
      [1, 3, 2],
      [2, 3, 0],
      [1, 0, 3],
      [1, 0, 2],
    ],
    [
      [2, 1],
      [3, 0],
    ]
  )
).toBe(0);

/**
 * Accepted
 * 99/99 cases passed (1 ms)
 * Your runtime beats 83.33 % of typescript submissions
 * Your memory usage beats 83.33 % of typescript submissions (61 MB)
 */
