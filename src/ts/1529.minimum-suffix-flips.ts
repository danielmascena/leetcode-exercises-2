import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1529 lang=typescript
 *
 * [1529] Minimum Suffix Flips
 */

// @lc code=start
function minFlips(target: string): number {
  const len = target.length;
  const btgt = Array.from(target).map((c) => Boolean(+c));
  const sbtgt = String(btgt);
  const arr = new Array<boolean>(len).fill(false);
  var ans = 0;
  var idx = 0;
  var tfm = 0;

  while (idx < len) {
    const t = tfm % 2;

    if (t) {
      arr[idx] = true;
    }
    if (btgt[idx] !== arr[idx]) {
      arr[idx] = btgt[idx]!;
      ans++;
      tfm++;
    }
    idx++;
  }
  return ans;
}
// @lc code=end

expect(minFlips("10111")).toBe(3);
expect(minFlips("101")).toBe(3);
expect(minFlips("0000")).toBe(0);
expect(minFlips("11000")).toBe(2);

/**
 * Accepted
 * 79/79 cases passed (38 ms)
 * Your runtime beats 11.11 % of typescript submissions
 * Your memory usage beats 11.11 % of typescript submissions (69.4 MB)
 */
