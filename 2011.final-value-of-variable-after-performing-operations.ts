import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  var X = 0;

  for (const op of operations) {
    if (op.charAt(1) === "+") {
      X++;
    } else {
      X--;
    }
  }
  return X;
}
// @lc code=end

expect(finalValueAfterOperations(["--X", "X++", "X++"])).toBe(1);
expect(finalValueAfterOperations(["++X", "++X", "X++"])).toBe(3);
expect(finalValueAfterOperations(["X++", "++X", "--X", "X--"])).toBe(0);

/**
 * Accepted
 * 259/259 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 50.68 % of typescript submissions (56.6 MB)
 */
