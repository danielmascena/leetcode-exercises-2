import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1170 lang=typescript
 *
 * [1170] Compare Strings by Frequency of the Smallest Character
 */

// @lc code=start
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  const qts = new Array<number>(2000).fill(0);
  const { min } = Math;
  const f = (w: string): number => {
    const lts = new Array<number>(26).fill(0);
    let x = 25;

    for (const c of new Uint8Array(Buffer.from(w))) {
      const p = c - 97;
      x = min(x, p);

      if (lts[p] !== undefined) {
        lts[p]++;
      }
    }
    return lts[x] ?? 0;
  };
  words.forEach((w) => {
    const t = f(w) - 1;

    if (qts[t] !== undefined) {
      qts[t]++;
    }
  });
  for (let i = 1999, t = 0; i >= 0; i--) {
    t = qts[i]! += t;
  }
  return queries.map((q) => qts[f(q)] ?? 0);
}
// @lc code=end

expect(numSmallerByFrequency(["cbd"], ["zaaaz"])).toEqual([1]);
expect(
  numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"])
).toEqual([1, 2]);
expect(
  numSmallerByFrequency(
    [
      "bba",
      "abaaaaaa",
      "aaaaaa",
      "bbabbabaab",
      "aba",
      "aa",
      "baab",
      "bbbbbb",
      "aab",
      "bbabbaabb",
    ],
    [
      "aaabbb",
      "aab",
      "babbab",
      "babbbb",
      "b",
      "bbbbbbbbab",
      "a",
      "bbbbbbbbbb",
      "baaabbaab",
      "aa",
    ]
  )
).toEqual([6, 1, 1, 2, 3, 3, 3, 1, 3, 2]);

/**
 * Accepted
 * 37/37 cases passed (31 ms)
 * Your runtime beats 30.77 % of typescript submissions
 * Your memory usage beats 7.69 % of typescript submissions (66.5 MB)
 */
