import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3498 lang=typescript
 *
 * [3498] Reverse Degree of a String
 */

// @lc code=start
function reverseDegree(s: string): number {
  const BASE = 123;
  let ans = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    ans += (BASE - s.codePointAt(i)!) * (i + 1);
  }
  return ans;
}
// @lc code=end

expect(reverseDegree("abc")).toBe(148);
expect(reverseDegree("zaza")).toBe(160);

/**
 * Accepted
 * 933/933 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 73.21 % of typescript submissions (57.8 MB)
 */
