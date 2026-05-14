import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1899 lang=typescript
 *
 * [1899] Merge Triplets to Form Target Triplet
 */

// @lc code=start
function mergeTriplets(triplets: number[][], target: number[]): boolean {
  const [x = 1, y = 1, z = 1] = target;
  let hasX = false;
  let hasY = false;
  let hasZ = false;

  triplets
    .filter(
      ([a = 0, b = 0, c = 0]) =>
        (a === x || y === b || z === c) && a <= x && b <= y && c <= z
    )
    .forEach(([a, b, c]) => {
      hasX ||= a === x;
      hasY ||= b === y;
      hasZ ||= c === z;
    });
  return hasX && hasY && hasZ;
}
// @lc code=end

expect(
  mergeTriplets(
    [
      [2, 5, 3],
      [1, 8, 4],
      [1, 7, 5],
    ],
    [2, 7, 5]
  )
).toBeTrue();
expect(
  mergeTriplets(
    [
      [3, 4, 5],
      [4, 5, 6],
    ],
    [3, 2, 5]
  )
).toBeFalse();
expect(
  mergeTriplets(
    [
      [2, 5, 3],
      [2, 3, 4],
      [1, 2, 5],
      [5, 2, 3],
    ],
    [5, 5, 5]
  )
).toBeTrue();
expect(
  mergeTriplets(
    [
      [3, 5, 1],
      [10, 5, 7],
    ],
    [3, 5, 7]
  )
).toBeFalse();

/**
 * Accepted
 * 62/62 cases passed (12 ms)
 * Your runtime beats 45.71 % of typescript submissions
 * Your memory usage beats 31.43 % of typescript submissions (90.7 MB)
 */
