import { expect } from "bun:test";
/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  const dots1 = version1.split(/\d/).filter(Boolean).length;
  const dots2 = version2.split(/\d/).filter(Boolean).length;
  const DOT = ".";
  const maxDots = Math.max(dots1, dots2);
  const maxLen = Math.max(version1.length, version2.length);
  const normalizedVersion1 = version1.padEnd(
    version1.length + (maxDots - dots1) * 2,
    ".0"
  );
  const normalizedVersion2 = version2.padEnd(
    version2.length + (maxDots - dots2) * 2,
    ".0"
  );

  for (let i = 0, i1 = 0, i2 = 0; i <= maxDots; i++) {
    const j1 = normalizedVersion1.indexOf(DOT, i1);
    const j2 = normalizedVersion2.indexOf(DOT, i2);
    const v1 = +normalizedVersion1.substring(i1, j1 > 0 ? j1 : maxLen);
    const v2 = +normalizedVersion2.substring(i2, j2 > 0 ? j2 : maxLen);

    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    }
    i1 = j1 + 1;
    i2 = j2 + 1;
  }
  return 0;
}
// @lc code=end

expect(compareVersion("1.0", "1.0.0.0")).toBe(0);
expect(compareVersion("1.2", "1.10")).toBe(-1);
expect(compareVersion("1.01", "1.001")).toBe(0);
expect(compareVersion("1.0.1", "1")).toBe(1);
expect(compareVersion("1", "1.1")).toBe(-1);

/**
 * Accepted
 * 89/89 cases passed (6 ms)
 * Your runtime beats 7.14 % of typescript submissions
 * Your memory usage beats 5.71 % of typescript submissions (57.8 MB)
 */
