import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1433 lang=typescript
 *
 * [1433] Check If a String Can Break Another String
 */

// @lc code=start
function checkIfCanBreak(s1: string, s2: string): boolean {
  const arr1 = new Uint8Array(Buffer.from(s1));
  const arr2 = new Uint8Array(Buffer.from(s2));
  const sfn = (a: number, b: number) => a - b;
  const n = s1.length;
  let ct1 = 0;
  let ct2 = 0;
  arr1.sort(sfn);
  arr2.sort(sfn);

  for (let i = 0; i < n; i++) {
    const c1 = arr1[i]!;
    const c2 = arr2[i]!;

    if (c1 >= c2) {
      ct1++;
    }
    if (c2 >= c1) {
      ct2++;
    }
  }
  return ct1 === n || ct2 === n;
}
// @lc code=end

expect(checkIfCanBreak("abc", "xya")).toBeTrue();
expect(checkIfCanBreak("abe", "acd")).toBeFalse();
expect(checkIfCanBreak("leetcodee", "interview")).toBeTrue();

/**
 * Accepted
 * 103/103 cases passed (162 ms)
 * Your runtime beats 14.29 % of typescript submissions
 * Your memory usage beats 71.43 % of typescript submissions (65.6 MB)
 */
