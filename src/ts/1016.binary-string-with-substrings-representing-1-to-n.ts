import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1016 lang=typescript
 *
 * [1016] Binary String With Substrings Representing 1 To N
 */

// @lc code=start
function queryString(s: string, n: number): boolean {
  for (let v = 1; v <= n; v++) {
    const sv = v.toString(2);
    if (!s.includes(sv)) return false;
  }
  return true;
}
// @lc code=end

expect(queryString("0110", 3)).toBeTrue();
expect(queryString("0110", 4)).toBeFalse();

/**
 *
 * Accepted
 * 30/30 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 50 % of typescript submissions (54 MB)
 */
