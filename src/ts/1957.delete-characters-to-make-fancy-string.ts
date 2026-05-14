import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1957 lang=typescript
 *
 * [1957] Delete Characters to Make Fancy String
 */

// @lc code=start
function makeFancyString(s: string): string {
  const { min } = Math;
  var ans = "";
  var lt = "";

  for (let i = 0, l = s.length; i < l; i++) {
    const c = s.charAt(i);

    if (lt === (s.charAt(i - 2) ?? "") && lt === c) {
      continue;
    }
    ans += c;
    lt = c;
  }
  return ans;
}
// @lc code=end

expect(makeFancyString("leeetcode")).toBe("leetcode");
expect(makeFancyString("aaabaaaa")).toBe("aabaa");
expect(makeFancyString("aab")).toBe("aab");

/**
 * Accepted
 * 306/306 cases passed (72 ms)
 * Your runtime beats 52.63 % of typescript submissions
 * Your memory usage beats 26.32 % of typescript submissions (67.4 MB)
 */
