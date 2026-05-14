import { expect } from "bun:test";
/*
 * @lc app=leetcode id=932 lang=typescript
 *
 * [932] Beautiful Array
 */

// @lc code=start
function beautifulArray(n: number): number[] {
  if (n === 1) {
    return [1];
  }
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const doubles = Array.from({ length: n }, (_, i) => (i + 1) * 2);
  const arr: number[] = [];
  const lst = [1];
  const z = nums.at(-2)! + nums.at(-1)!;
  const ans: number[] = [];
  let j = 1;

  while (j < n && doubles[j]! <= z) {
    arr.push(j + 1);
    j++;
  }
  while (++j <= n) {
    lst.push(j);
  }
  j = 0;

  for (let i = 0, al = arr.length, ll = lst.length; j < al && i < ll - 1; i++) {
    const a: number[] = [];
    let pre = lst[i]!;
    let nxt = lst[i + 1]!;

    while (j < al && arr[j]! * 2 < pre + nxt) {
      a.push(arr[j++]!);
    }
    ans.push(pre, ...a, nxt);
  }
  ans.unshift(...arr.slice(j));
  console.log(j, arr, lst, ans);
  return ans;
}
// @lc code=end

expect(beautifulArray(4)).toEqual([2, 1, 4, 3]);
expect(beautifulArray(5)).toEqual([3, 1, 2, 5, 4]);
