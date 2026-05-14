import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2483 lang=typescript
 *
 * [2483] Minimum Penalty for a Shop
 */

// @lc code=start
function bestClosingTime(customers: string): number {
  const n = customers.length;
  const open = new Array<number>(n);
  var t = 0;
  var h = n;

  for (let i = 0, k = 0; i < n; i++, t = k) {
    if (customers.charAt(i) === "N") {
      k++;
    }
    open[i] = k;
  }

  for (let i = n - 1, k = 0; i >= 0; i--) {
    if (customers.charAt(i) === "Y") {
      k++;
    }
    const v = (open[i - 1] ?? 0) + k;

    if (v <= t) {
      t = v;
      h = i;
    }
  }
  return h;
}
// @lc code=end

expect(bestClosingTime("YYNY")).toBe(2);
expect(bestClosingTime("NNNNN")).toBe(0);
expect(bestClosingTime("YYYY")).toBe(4);

/*
Accepted
42/42 cases passed (25 ms)
Your runtime beats 22.22 % of typescript submissions
Your memory usage beats 48.15 % of typescript submissions (61.8 MB)
*/
