import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2947 lang=typescript
 *
 * [2947] Count Beautiful Substrings I
 */

// @lc code=start
function beautifulSubstrings(s: string, k: number): number {
  const len = s.length;
  const regex = /[aeiou]/;
  const isVowel = (c: string) => regex.test(c);
  let pt = 1;
  let ans = 0;
  let v1 = 0;
  let c1 = 0;
  let i1 = 0;

  while ((pt * pt) % k) {
    pt++;
  }
  let sz = pt;

  for (; sz <= len; sz += pt) {
    let v2 = v1;
    let c2 = c1;
    let i = i1;

    for (; i < sz; i++) {
      const c = s.charAt(i);

      if (isVowel(c)) {
        v2++;
      } else {
        c2++;
      }
    }
    c1 = c2;
    v1 = v2;
    i1 = sz;

    for (let j = 0; i <= len; i++, j++) {
      if (c2 === v2 && (v2 * c2) % k === 0) {
        ans++;
        //        console.log(s.slice(j, i), v2, c2);
      }
      if (isVowel(s.charAt(i))) {
        v2++;
      } else {
        c2++;
      }
      if (isVowel(s.charAt(j))) {
        v2--;
      } else {
        c2--;
      }
    }
  }
  return ans;
}
// @lc code=end

expect(beautifulSubstrings("baeyh", 2)).toBe(2);
expect(beautifulSubstrings("abba", 1)).toBe(3);
expect(beautifulSubstrings("bcdf", 1)).toBe(0);
expect(beautifulSubstrings("pulorolqcvhafexui", 9)).toBe(3);
expect(
  beautifulSubstrings(
    "zermimniolynzdkeioiddrhuarohgfurgfzgevmecziuafaubwmudamdepooecaeatcuwuojuiihaefcuaa",
    27
  )
).toBe(11);

/**
 * Accepted
 * 619/619 cases passed (78 ms) [WARN] Failed to get runtime percentile.
 */
