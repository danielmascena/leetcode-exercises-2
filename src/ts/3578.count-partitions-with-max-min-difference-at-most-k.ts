/*
 * @lc app=leetcode id=3578 lang=typescript
 *
 * [3578] Count Partitions With Max-Min Difference at Most K
 */

// @lc code=start
function countPartitions(nums: number[], k: number): number {
  const n = nums.length;
  const { max, min } = Math;
  const pcp = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let mxm = nums[i];
    let mnm = mxm;
    let ttl = nums[i - 1] ?? 0;

    for (let j = i + 1; j < n; j++) {
      const v = nums[j];
      mxm = max(mxm, v);
      mnm = min(mnm, v);

      if (mxm - mnm <= k) {
        ttl = pcp[j - 1];
      }
    }
  }
}
// @lc code=end
