import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2895 lang=typescript
 *
 * [2895] Minimum Processing Time
 */

// @lc code=start
function minProcessingTime(processorTime: number[], tasks: number[]): number {
  const { max } = Math;
  const n = processorTime.length;
  const sfn = (a: number, b: number) => a - b;
  let ans = 0;
  processorTime.sort(sfn);
  tasks.sort(sfn);

  for (let i = 0, j = tasks.length; i < n; i++, j -= 4) {
    const p = processorTime[i]!;
    const t = max(...tasks.slice(j - 4, j));
    ans = max(ans, p + t);
  }
  return ans;
}
// @lc code=end

expect(minProcessingTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5])).toBe(16);
expect(minProcessingTime([10, 20], [2, 3, 1, 2, 5, 8, 4, 3])).toBe(23);

/**
 * Accepted
 * 716/716 cases passed (82 ms)
 * Your runtime beats 28.57 % of typescript submissions
 * Your memory usage beats 14.29 % of typescript submissions (74.3 MB)
 */
