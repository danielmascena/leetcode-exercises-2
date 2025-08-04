import { expect } from "bun:test";
/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const pt = Array.from({ length: numRows }, (_, i) =>
    new Array(i + 1).fill(1)
  );

  for (let i = 1; i < numRows; i++) {
    const top = pt[i - 1]!;
    const row = pt[i]!;

    for (let j = 0; j <= i; j++) {
      const l = top[j - 1] ?? 0;
      const r = top[j] ?? 0;
      row[j] = l + r;
    }
  }
  return pt;
}
// @lc code=end

expect(generate(5).flat()).toContainAllValues(
  [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]].flat()
);
expect(generate(1).flat()).toContainAllValues([[1]].flat());

/**
 * Accepted
 * 30/30 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 21.52 % of typescript submissions (56.9 MB)
 */
