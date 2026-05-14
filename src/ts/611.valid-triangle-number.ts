import { expect } from "bun:test";
/*
 * @lc app=leetcode id=611 lang=typescript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
function triangleNumber(nums: number[]): number {
  type Triplet = [number, number, number];
  //const { min } = Math;
  const triplets: Triplet[] = [];
  const len = nums.length;
  const dp = (idx: number, fst?: number, snd?: number): void => {
    if (idx === len) {
      return;
    }
    const num = nums[idx]!;
    idx++;
    console.log(idx, num);

    if (fst === undefined) {
      dp(idx, num);
    } else if (snd === undefined) {
      dp(idx, fst, num);
    } else {
      triplets.push([fst, snd, num]);
    }
    dp(idx, fst, snd);
  };
  nums.sort((a, b) => a - b);
  dp(0);
  // valid triangle number: a+b > c and a+c > b, and b+c > a
  return triplets.reduce(
    (ans, [a, b, c]) =>
      a + b > c /* && a + c > b && b + c > a */ ? ans + 1 : ans,
    0
  );
}
// @lc code=end

expect(triangleNumber([2, 2, 3, 4])).toBe(3);
expect(triangleNumber([4, 2, 3, 4])).toBe(4);

// Time Limit Exceeded
// 130/241 cases passed (N/A)
