import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3612 lang=typescript
 *
 * [3612] Process String with Special Operations I
 */

// @lc code=start
function processStr(s: string): string {
  const result: string[] = [];
  const ASTERISK = "*";
  const PERCENT = "%";
  const HASH = "#";

  for (const c of s) {
    switch (c) {
      case ASTERISK:
        result.pop();
        break;
      case HASH:
        result.push(...result);
        break;
      case PERCENT:
        result.reverse();
        break;
      default:
        result.push(c);
    }
  }
  return result.join("");
}
// @lc code=end

expect(processStr("a#b%*")).toEqual("ba");
expect(processStr("z*#")).toEqual("");

/**
 * Accepted
 * 969/969 cases passed (147 ms)
 * Your runtime beats 22 % of typescript submissions
 * Your memory usage beats 21 % of typescript submissions (90.1 MB)
 */
