import { expect } from "bun:test";
/*
 * @lc app=leetcode id=744 lang=typescript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
  let ans = "{";

  for (const c of letters) {
    if (c > target && c < ans) {
      ans = c;
    }
  }
  return ans < "{" ? ans : letters[0];
}
// @lc code=end

expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c");
expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f");
expect(nextGreatestLetter(["x", "x", "y", "y"], "z")).toBe("x");

/*
Accepted
167/167 cases passed (3 ms)
Your runtime beats 6.9 % of typescript submissions
Your memory usage beats 6.9 % of typescript submissions (58.6 MB)
*/
