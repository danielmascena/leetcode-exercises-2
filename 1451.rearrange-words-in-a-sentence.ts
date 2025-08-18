import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1451 lang=typescript
 *
 * [1451] Rearrange Words in a Sentence
 */

// @lc code=start
function arrangeWords(text: string): string {
  const t = text
    .toLowerCase()
    .split(" ")
    .toSorted(({ length: l1 }, { length: l2 }) => l1 - l2)
    .join(" ");
  return t.charAt(0).toUpperCase() + t.substring(1);
}
// @lc code=end

expect(arrangeWords("Leetcode is cool")).toBe("Is cool leetcode");
expect(arrangeWords("Keep calm and code on")).toBe("On and keep calm code");
expect(arrangeWords("To be or not to be")).toBe("To be or to be not");

/**
 * Accepted
 * 74/74 cases passed (11 ms)
 * Your runtime beats 20 % of typescript submissions
 * Your memory usage beats 60 % of typescript submissions (59.5 MB)
 */
