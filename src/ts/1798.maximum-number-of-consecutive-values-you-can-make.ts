import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1798 lang=typescript
 *
 * [1798] Maximum Number of Consecutive Values You Can Make
 */

// @lc code=start
function getMaximumConsecutive(coins: number[]): number {
  const nums = new Set<number>([0]);
  const len = coins.length;
  const sfn = (a: number, b: number) => a - b;
  const scoins = coins.toSorted(sfn);
  const dp = (i: number, t = scoins[i]!) => {
    if (i < len) {
      nums.add(t);

      for (let j = i + 1; j < len; j++) {
        dp(j, t + scoins[j]!);
      }
    }
  };
  let ans = 0;
  let prev = -1;

  for (let i = 0; i < len; i++) {
    dp(i);
  }
  for (const n of [...nums].sort(sfn)) {
    if (prev !== n - 1) {
      return ans;
    }
    ans++;
    prev = n;
  }
  return ans;
}
// @lc code=end

expect(getMaximumConsecutive([1, 4, 10, 3, 1])).toBe(20);
expect(getMaximumConsecutive([1, 1, 1, 4])).toBe(8);
expect(getMaximumConsecutive([1, 3])).toBe(2);
expect(
  getMaximumConsecutive([
    1, 89, 8, 1, 47, 34, 99, 1, 1, 1, 55, 89, 1, 52, 36, 1, 62, 1, 1, 1, 4, 27,
    1, 45, 1, 1, 48, 1, 94, 1, 63,
  ])
).toBe(868);
