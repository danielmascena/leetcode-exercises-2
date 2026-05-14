import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3137 lang=typescript
 *
 * [3137] Minimum Number of Operations to Make Word K-Periodic
 */

// @lc code=start
function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  const len = word.length;
  const m = new Map<string, number>();
  const t = len / k;
  const { max } = Math;
  var mxsz = 0;

  for (let i = 0; i < len; i += k) {
    const ss = word.substring(i, i + k);
    const q = (m.get(ss) ?? 0) + 1;
    m.set(ss, q);
    mxsz = max(mxsz, q);
  }
  return t - mxsz;
}
// @lc code=end

expect(minimumOperationsToMakeKPeriodic("leetcodeleet", 4)).toBe(1);
expect(minimumOperationsToMakeKPeriodic("leetcoleet", 2)).toBe(3);

/**
 * Accepted
 * 820/820 cases passed (29 ms)
 * Your runtime beats 25 % of typescript submissions
 * Your memory usage beats 25 % of typescript submissions (66.6 MB)
 */
