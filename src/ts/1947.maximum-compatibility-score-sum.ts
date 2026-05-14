import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1947 lang=typescript
 *
 * [1947] Maximum Compatibility Score Sum
 */

// @lc code=start
function maxCompatibilitySum(
  students: number[][],
  mentors: number[][]
): number {
  const wd = students[0].length!;
  const sfn = (a: number, b: number) => a - b;
  const tfn = (arr: number[]) => Number.parseInt(arr.join(""));
  const st1 = students.map(tfn).toSorted(sfn);
  const mt2 = mentors.map(tfn).toSorted(sfn);
  let ans = 0;

  for (let i = 0, len = students.length; i < len; i++) {
    const st = String(st1[i]).padStart(wd, "0");
    const mt = String(mt2[i]).padStart(wd, "0");

    for (let j = 0; j < wd; j++) {
      if (st[j] === mt[j]) {
        ans++;
      }
    }
  }
  return ans;
}
// @lc code=end

expect(
  maxCompatibilitySum(
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ]
  )
).toBe(8);
expect(
  maxCompatibilitySum(
    [
      [0, 0],
      [0, 0],
      [0, 0],
    ],
    [
      [1, 1],
      [1, 1],
      [1, 1],
    ]
  )
).toBe(0);
