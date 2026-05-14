import { expect } from "bun:test";
/*
 * @lc app=leetcode id=969 lang=typescript
 *
 * [969] Pancake Sorting
 */

// @lc code=start
function pancakeSort(arr: number[]): number[] {
  const len = arr.length;
  const ans: number[] = [];
  const target = arr.toSorted((a, b) => a - b);
  let kth = len - 1;

  while (kth >= 0 && String(arr) !== String(target)) {
    const val = target[kth]!;
    if (arr[kth] !== val) {
      const pos = arr.lastIndexOf(val) + 1;
      arr = [...arr.slice(0, pos).reverse(), ...arr.slice(pos)];
      arr = [...arr.slice(0, kth + 1).reverse(), ...arr.slice(kth + 1)];
      ans.push(pos, kth + 1);
    }
    kth--;
  }
  return ans;
}
// @lc code=end

expect(pancakeSort([3, 2, 4, 1])).toEqual([4, 2, 4, 3]);
expect(pancakeSort([1, 2, 3])).toEqual([]);

/**
 * Accepted
 * 215/215 cases passed (15 ms)
 * Your runtime beats 13.33 % of typescript submissions
 * Your memory usage beats 20 % of typescript submissions (62.5 MB)
 */
