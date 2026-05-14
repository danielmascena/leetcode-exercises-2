import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2411 lang=typescript
 *
 * [2411] Smallest Subarrays With Maximum Bitwise OR
 */

// @lc code=start
function smallestSubarrays(nums: number[]): number[] {
  const len = nums.length;
  const { max } = Math;
  const ans = new Array<number>(len).fill(0);
  var mbo = 0;
  nums.forEach((v) => (mbo |= v));
  const l = mbo.toString(2).length;
  const pos = new Array<number>(l).fill(0);

  for (let i = len - 1; i >= 0; i--) {
    const num = nums[i]!;
    const sbn = num.toString(2);
    const sl = sbn.length;
    const dfl = l - sl;

    for (let j = sl - 1; j >= 0; j--) {
      if (sbn.charAt(j) === "1") {
        pos[dfl + j] = i;
      }
    }
    const m = max(...pos);
    ans[i] = max(1, m - i + 1);
  }
  return ans;
}
// @lc code=end

expect(smallestSubarrays([1, 0, 2, 1, 3])).toContainAllValues([3, 3, 2, 2, 1]);
expect(smallestSubarrays([1, 2])).toContainAllValues([2, 1]);
expect(
  smallestSubarrays([1, 0, 2, 1, 3, 7, 0, 8, 16, 2, 31, 0, 4, 5, 2])
).toContainAllValues([9, 8, 7, 6, 5, 4, 5, 4, 3, 2, 1, 4, 3, 2, 1]);
expect(
  smallestSubarrays([
    0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 0, 1,
  ])
).toContainAllValues([
  18, 17, 16, 15, 14, 13, 12, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
]);
expect(
  smallestSubarrays([
    5, 1, 3, 7, 15, 0, 0, 31, 63, 127, 3, 9, 2, 14, 28, 56, 112, 224, 448, 896,
    1024, 512, 256, 128,
  ])
).toContainAllValues([
  21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 4, 3,
  2, 1,
]);
expect(
  smallestSubarrays([
    1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0, 3, 5, 9, 17, 33, 65, 129,
    257, 513, 1025, 2049, 0, 7, 14, 21, 42, 84,
  ])
).toContainAllValues([
  23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 12, 11, 11, 11, 11, 11,
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
]);
expect(
  smallestSubarrays([
    7, 0, 7, 0, 7, 0, 7, 0, 7, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535, 0, 1, 2, 4,
  ])
).toContainAllValues([
  18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 4, 3, 2, 1,
]);
expect(
  smallestSubarrays([
    9, 17, 33, 65, 129, 3, 5, 11, 21, 41, 81, 161, 0, 255, 128, 64, 32,
  ])
).toContainAllValues([7, 7, 7, 7, 7, 7, 6, 5, 6, 5, 4, 3, 2, 1, 3, 2, 1]);
expect(
  smallestSubarrays([
    0, 1, 2, 4, 8, 16, 31, 62, 124, 248, 496, 992, 1984, 3968, 7936, 15872,
    31744, 63488, 126976, 253952, 507904,
  ])
).toContainAllValues([
  21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
]);
expect(
  smallestSubarrays([
    901199535, 315474461, 661795225, 686921898, 510463450, 660387957, 435898823,
    782659168, 233485527, 809139535, 964007621, 431537474, 598709166, 759774514,
    404435340, 524858118, 478007842, 676900651, 677366192, 926221343, 160318780,
    456824950, 369006321, 263825621, 184077712, 797501232, 896138057, 50801683,
    579498426, 104970059, 966719577, 441096876, 240916807, 383138244, 598692281,
    972179410, 12434545, 124372238, 927542441, 538408783, 806740841, 549547830,
    539122771, 913569995, 299997633, 854900962, 468565166, 319400720, 145215559,
    609013034, 551741135, 640237191, 106401826, 851424700, 216828062, 363577857,
    400053887, 565682499, 250259753, 703185895, 261673447, 160103554, 102638637,
    917800424, 438116490, 614045058, 35867827, 776376635, 225178557, 804524224,
    901361341, 761721292, 652461356, 779567316, 928338762, 766216512, 710267883,
    506351360, 348795317, 115885161, 484866172, 921347066, 671599100, 476124961,
    97901140, 812707934,
  ])
).toContainAllValues([
  5, 4, 6, 5, 4, 5, 4, 4, 5, 5, 7, 7, 10, 9, 8, 7, 6, 5, 6, 5, 6, 6, 6, 5, 8, 7,
  6, 8, 7, 6, 6, 5, 5, 4, 4, 3, 11, 10, 9, 8, 7, 6, 6, 5, 6, 5, 7, 6, 8, 7, 6,
  6, 5, 4, 4, 5, 4, 10, 9, 8, 9, 8, 7, 6, 6, 6, 5, 4, 7, 6, 5, 6, 7, 6, 5, 4, 9,
  8, 7, 6, 5, 4, 4, 3, 2, 1,
]);
expect(smallestSubarrays([1, 0])).toContainAllValues([1, 1]);

/**
 * Accepted
 * 59/59 cases passed (60 ms)
 * Your runtime beats 37.5 % of typescript submissions
 * Your memory usage beats 12.5 % of typescript submissions (76.2 MB)
 */
