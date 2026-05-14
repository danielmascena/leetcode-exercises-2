import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3206 lang=typescript
 *
 * [3206] Alternating Groups I
 */

// @lc code=start
function numberOfAlternatingGroups(colors: number[]): number {
  const n = colors.length;
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    const curr = colors[i % n];
    const next = colors[(i + 1) % n];

    if (curr !== next && colors[(i - 1) % n] === next) {
      ans++;
    }
  }
  return ans;
}
// @lc code=end

expect(numberOfAlternatingGroups([1, 1, 1])).toBe(0);
expect(numberOfAlternatingGroups([0, 1, 0, 0, 1])).toBe(3);

/**
 * Accepted
 * 795/795 cases passed (57 ms)
 * Your runtime beats 20 % of typescript submissions
 * Your memory usage beats 85.71 % of typescript submissions (57.3 MB)
 */
