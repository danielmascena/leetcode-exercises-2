import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2044 lang=typescript
 *
 * [2044] Count Number of Maximum Bitwise-OR Subsets
 */

// @lc code=start
function countMaxOrSubsets(nums: number[]): number {
  const { max } = Math;
  var mbw = 0;
  var prev = 0;
  var ans = 0;
  nums.forEach((num) => (mbw = max(mbw, (prev |= num))));
  console.log(mbw);

  for (let i = 0, j = 0, len = nums.length; i < len; j = ++i) {
    let t = 0;
    let b = 0;

    while (j < len && t < mbw) {
      t |= nums[j]!;
      j++;
    }
    if (t === mbw) {
      ans++;

      for (let x = i + 1, v = 0; x < j - 1; x++, v++) {
        ans += 1 + v;
      }
      console.log(ans, i, j, "@");
    }
    while (j < len && t === mbw) {
      t |= nums[j]!;
      ans += ++b;
      j++;
      console.log(ans, i, j);
    }
  }
  return ans;
}
// @lc code=end

expect(countMaxOrSubsets([3, 1])).toBe(2);
expect(countMaxOrSubsets([2, 2, 2])).toBe(7);
expect(countMaxOrSubsets([3, 2, 1, 5])).toBe(6);
expect(countMaxOrSubsets([2, 2, 1, 3])).toBe(11);
